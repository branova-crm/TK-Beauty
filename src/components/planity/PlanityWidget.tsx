"use client";

import "@/styles/planity.css";
import { Component, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useOverlayLock } from "@/hooks/useOverlayLock";

const PLANITY_HEADER_OFFSET = "136px";
const LOAD_TIMEOUT_MS = 25000;
const CCM_WAIT_MS = 2500;

const POLYFILLS_SRC =
    "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js";
const APP_SRC =
    "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js";

const PLANITY_EMBEDDING_NAME = "planity";

type CcmEmbedding = { id?: string; name?: string };

declare global {
    interface Window {
        planity?: {
            key: string;
            primaryColor: string;
            options: {
                countryCode: string;
                headerWidth?: string;
                onServiceAdd?: () => void;
            };
            container?: HTMLElement;
            appointmentContainer?: HTMLElement;
        };
        google?: unknown;
        CCM?: {
            acceptedEmbeddings?: CcmEmbedding[] | (() => CcmEmbedding[]);
            fullConsentGiven?: boolean | (() => boolean);
            consent?: boolean;
            openWidget?: () => void;
            openControlPanel?: () => void;
        };
    }
}

function scrollToWidgetTop(behavior: ScrollBehavior = "smooth") {
    const shell = document.getElementById("planity-appointment");
    if (!shell) return;

    const offset = Number.parseInt(PLANITY_HEADER_OFFSET, 10) || 136;
    const top = shell.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior });
}

function configurePlanity(container: HTMLElement, apiKey: string) {
    window.planity = {
        key: apiKey,
        primaryColor: "#554734",
        options: {
            countryCode: "DE",
            headerWidth: PLANITY_HEADER_OFFSET,
            onServiceAdd: () => scrollToWidgetTop("smooth"),
        },
        appointmentContainer: container,
    };
}

function isPlanityLive(container: HTMLElement) {
    return (
        container.isConnected &&
        Boolean(container.querySelector(".planity_ui_appointment_background, #planitywl"))
    );
}

function findPlanityScript(src: string) {
    return document.querySelector(
        `script[src="${src}"], script[src^="${src}?"]`,
    ) as HTMLScriptElement | null;
}

function injectScript(src: string, forceReload = false): Promise<void> {
    if (forceReload) {
        document.querySelectorAll(`script[src="${src}"], script[src^="${src}?"]`).forEach((node) => node.remove());
    }

    const existing = forceReload ? null : findPlanityScript(src);
    if (existing) {
        if (existing.dataset.planityReady === "true" || existing.dataset.loaded === "true") {
            return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error(`Planity script failed: ${src}`)), {
                once: true,
            });
        });
    }

    const scriptSrc = forceReload ? `${src}?retry=${Date.now()}` : src;

    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.async = false;
        script.onload = () => {
            script.dataset.planityReady = "true";
            resolve();
        };
        script.onerror = () => reject(new Error(`Planity script failed: ${src}`));
        document.body.appendChild(script);
    });
}

async function ensurePolyfillsLoaded(): Promise<void> {
    await injectScript(POLYFILLS_SRC);
}

function readCcmFlag(value: boolean | (() => boolean) | undefined) {
    if (typeof value === "function") return value();
    return Boolean(value);
}

function getAcceptedEmbeddings(): CcmEmbedding[] {
    const raw = window.CCM?.acceptedEmbeddings;
    const list = typeof raw === "function" ? raw() : raw;
    return Array.isArray(list) ? list : [];
}

function isPlanityConsentGranted(): boolean {
    if (typeof window === "undefined") return false;
    if (!window.CCM) return true;

    if (readCcmFlag(window.CCM.fullConsentGiven)) return true;

    return getAcceptedEmbeddings().some((embedding) =>
        String(embedding.name ?? "").toLowerCase().includes(PLANITY_EMBEDDING_NAME),
    );
}

function waitForCcmReady(timeoutMs = CCM_WAIT_MS): Promise<void> {
    if (window.CCM) return Promise.resolve();

    return new Promise((resolve) => {
        const onReady = () => {
            window.clearTimeout(timer);
            window.removeEventListener("ccm19WidgetLoaded", onReady);
            resolve();
        };
        const timer = window.setTimeout(onReady, timeoutMs);
        window.addEventListener("ccm19WidgetLoaded", onReady, { once: true });
    });
}

let mountPlanityMutex: Promise<void> = Promise.resolve();

async function waitForPlanityLive(container: HTMLElement, timeoutMs = 20000): Promise<boolean> {
    const started = Date.now();

    while (Date.now() - started < timeoutMs) {
        if (!container.isConnected) return false;
        if (isPlanityLive(container)) return true;
        await new Promise((resolve) => window.setTimeout(resolve, 200));
    }

    return isPlanityLive(container);
}

async function mountPlanityApp(container: HTMLElement, apiKey: string): Promise<void> {
    const run = async () => {
        configurePlanity(container, apiKey);
        if (isPlanityLive(container)) return;

        await ensurePolyfillsLoaded();
        if (isPlanityLive(container)) return;

        await injectScript(APP_SRC, Boolean(findPlanityScript(APP_SRC)) && !isPlanityLive(container));

        const live = await waitForPlanityLive(container);
        if (!live) {
            throw new Error("Planity widget did not mount");
        }
    };

    mountPlanityMutex = mountPlanityMutex.then(run, run);
    await mountPlanityMutex;
}

function isPlanityOverlayNode(node: Node): boolean {
    if (!(node instanceof HTMLElement)) return false;
    if (node.closest("#planity-appointment")) return false;

    const id = node.id?.toLowerCase() ?? "";
    const className = node.className?.toString().toLowerCase() ?? "";

    if (id.includes("planity") || className.includes("planity")) {
        const style = window.getComputedStyle(node);
        if (style.position === "fixed" || style.position === "absolute") {
            return style.display !== "none" && style.visibility !== "hidden";
        }
    }

    return false;
}

function hasActivePlanityOverlay(): boolean {
    const candidates = document.querySelectorAll("body *");
    for (const node of candidates) {
        if (!(node instanceof HTMLElement)) continue;
        if (node.closest(".header-top, .sticky-nav, .offcanvas-overlay, #contact-modal-root, #planity-appointment")) {
            continue;
        }

        const id = node.id?.toLowerCase() ?? "";
        const className = node.className?.toString().toLowerCase() ?? "";

        if (!id.includes("planity") && !className.includes("planity")) continue;

        const style = window.getComputedStyle(node);
        const zIndex = Number.parseInt(style.zIndex, 10);

        if (
            (style.position === "fixed" || style.position === "absolute") &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            (Number.isNaN(zIndex) || zIndex >= 50)
        ) {
            const rect = node.getBoundingClientRect();
            if (rect.width > 120 && rect.height > 120) return true;
        }
    }

    return false;
}

type PlanityHostProps = {
    apiKey: string;
    onLive: () => void;
    onError: () => void;
};

class PlanityHost extends Component<PlanityHostProps> {
    private host: HTMLDivElement | null = null;
    private container: HTMLDivElement | null = null;
    private cancelled = false;
    private loadingTimeout = 0;
    private contentObserver: MutationObserver | null = null;
    private livePoll = 0;

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        const host = this.host;
        if (!host) return;

        const container = document.createElement("div");
        container.id = "planity-appointment";
        container.className = "w-full min-h-[120px]";
        host.appendChild(container);
        this.container = container;

        const notifyLive = () => {
            if (!this.cancelled && this.container && isPlanityLive(this.container)) {
                this.props.onLive();
                if (this.livePoll) {
                    window.clearInterval(this.livePoll);
                    this.livePoll = 0;
                }
            }
        };

        const contentObserver = new MutationObserver(notifyLive);
        contentObserver.observe(container, { childList: true, subtree: true });
        this.contentObserver = contentObserver;
        this.livePoll = window.setInterval(notifyLive, 250);

        void (async () => {
            try {
                await mountPlanityApp(container, this.props.apiKey);
                if (!this.cancelled) this.props.onLive();
            } catch {
                if (!this.cancelled) this.props.onError();
            }
        })();

        this.loadingTimeout = window.setTimeout(() => {
            if (!this.cancelled && !isPlanityLive(container)) {
                this.props.onError();
            }
        }, LOAD_TIMEOUT_MS);
    }

    componentWillUnmount() {
        this.cancelled = true;
        window.clearTimeout(this.loadingTimeout);
        if (this.livePoll) window.clearInterval(this.livePoll);
        this.livePoll = 0;
        this.contentObserver?.disconnect();
        this.contentObserver = null;
        this.container?.remove();
        this.container = null;
    }

    render() {
        return (
            <div
                className="planity-widget-host"
                ref={(node) => {
                    this.host = node;
                }}
            />
        );
    }
}

function readPlanityApiKey(): string | undefined {
    if (typeof window !== "undefined") {
        const runtime = (window as Window & { __PLANITY_API_KEY__?: string }).__PLANITY_API_KEY__;
        if (runtime) return runtime;
    }
    return process.env.NEXT_PUBLIC_PLANITY_API_KEY || undefined;
}

export default function PlanityWidget() {
    // Key erst clientseitig (planity-env.js / Runtime) — SSR bleibt key-frei → keine Hydration-Mismatch
    const [apiKey, setApiKey] = useState<string | undefined>(undefined);
    const [keyReady, setKeyReady] = useState(false);
    const [hasOverlay, setHasOverlay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);
    const [needsConsent, setNeedsConsent] = useState(false);
    const [canMount, setCanMount] = useState(false);
    const [mountId, setMountId] = useState(0);

    useEffect(() => {
        setApiKey(readPlanityApiKey());
        setKeyReady(true);
    }, []);

    useOverlayLock(hasOverlay);

    const evaluateOverlays = useCallback(() => {
        setHasOverlay(hasActivePlanityOverlay());
    }, []);

    const handleLive = useCallback(() => {
        setIsLoading(false);
        setLoadError(false);
        evaluateOverlays();
    }, [evaluateOverlays]);

    const handleError = useCallback(() => {
        setIsLoading(false);
        setLoadError(true);
    }, []);

    const retryMount = useCallback(() => {
        setIsLoading(true);
        setLoadError(false);
        setMountId((id) => id + 1);
        setCanMount(true);
    }, []);

    useLayoutEffect(() => {
        if (!apiKey) return;

        let cancelled = false;

        const syncConsent = () => {
            if (cancelled) return;
            const granted = isPlanityConsentGranted();
            const alreadyLive = Boolean(document.querySelector("#planitywl, .planity_ui_appointment_background"));
            if (granted || alreadyLive) {
                setNeedsConsent(false);
                setCanMount(true);
                return;
            }
            setNeedsConsent(true);
            setCanMount(false);
            setIsLoading(false);
        };

        void (async () => {
            await waitForCcmReady();
            if (cancelled) return;
            syncConsent();
        })();

        const onEmbeddingAccepted = (event: Event) => {
            const name = String((event as CustomEvent<{ name?: string }>).detail?.name ?? "").toLowerCase();
            if (name.includes(PLANITY_EMBEDDING_NAME) || isPlanityConsentGranted()) {
                const alreadyLive = Boolean(document.querySelector("#planitywl, .planity_ui_appointment_background"));
                setNeedsConsent(false);
                setLoadError(false);
                setCanMount(true);
                setIsLoading(!alreadyLive);
            }
        };

        window.addEventListener("ccm19EmbeddingAccepted", onEmbeddingAccepted);
        window.addEventListener("ccm19WidgetClosed", syncConsent);

        return () => {
            cancelled = true;
            window.removeEventListener("ccm19EmbeddingAccepted", onEmbeddingAccepted);
            window.removeEventListener("ccm19WidgetClosed", syncConsent);
        };
    }, [apiKey]);

    useLayoutEffect(() => {
        if (!canMount) return;

        const overlayObserver = new MutationObserver((mutations) => {
            const relevant = mutations.some((mutation) => {
                if (mutation.type === "attributes") {
                    return isPlanityOverlayNode(mutation.target as Node);
                }
                return Array.from(mutation.addedNodes).some(isPlanityOverlayNode);
            });

            if (relevant) evaluateOverlays();
        });

        overlayObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class", "style", "hidden", "aria-hidden"],
        });

        const onFocusIn = (event: FocusEvent) => {
            const target = event.target;
            if (target instanceof HTMLElement && target.closest("#planity-appointment")) {
                evaluateOverlays();
            }
        };

        document.addEventListener("focusin", onFocusIn);
        const interval = window.setInterval(() => {
            const container = document.getElementById("planity-appointment");
            if (container && isPlanityLive(container)) {
                setIsLoading(false);
            }
            evaluateOverlays();
        }, 400);

        return () => {
            overlayObserver.disconnect();
            document.removeEventListener("focusin", onFocusIn);
            window.clearInterval(interval);
        };
    }, [canMount, evaluateOverlays]);

    if (!keyReady) {
        return (
            <div className="planity-widget-shell">
                <div
                    className="planity-widget-loading"
                    aria-live="polite"
                    aria-busy="true"
                >
                    <p className="text-sm text-[#8A7A65]">Terminbuchung wird geladen …</p>
                    <div className="planity-widget-loading__bar planity-widget-loading__bar--lg" />
                    <div className="planity-widget-loading__bar planity-widget-loading__bar--md" />
                </div>
            </div>
        );
    }

    if (!apiKey) {
        return (
            <div className="planity-widget-shell">
                <p className="rounded-xl border border-[#3A3A3A]/10 bg-white/50 px-6 py-8 text-center text-sm text-[#685743]">
                    Terminbuchung ist derzeit nicht verfügbar. Bitte kontaktieren Sie uns telefonisch.
                </p>
            </div>
        );
    }

    return (
        <div className="planity-widget-shell">
            {needsConsent ? (
                <div className="mb-4 rounded-xl border border-[#3A3A3A]/10 bg-white/60 px-4 py-5 text-center text-sm text-[#685743]">
                    <p>
                        Die Online-Terminbuchung wird nach Ihrer Einwilligung für Planity geladen.
                    </p>
                    <button
                        type="button"
                        className="mt-3 font-semibold text-[#554734] underline underline-offset-2"
                        onClick={() => window.CCM?.openWidget?.() ?? window.CCM?.openControlPanel?.()}
                    >
                        Cookie-Einstellungen öffnen
                    </button>
                </div>
            ) : null}

            {isLoading && canMount ? (
                <div
                    className="planity-widget-loading planity-widget-loading--overlay"
                    aria-live="polite"
                    aria-busy="true"
                >
                    <p className="text-sm text-[#8A7A65]">Terminbuchung wird geladen …</p>
                    <div className="planity-widget-loading__bar planity-widget-loading__bar--lg" />
                    <div className="planity-widget-loading__bar planity-widget-loading__bar--md" />
                </div>
            ) : null}

            {loadError ? (
                <div className="mb-4 rounded-xl border border-[#3A3A3A]/10 bg-white/60 px-4 py-3 text-center text-sm text-[#685743]">
                    Die Buchung konnte nicht geladen werden.{" "}
                    <button
                        type="button"
                        className="font-semibold text-[#554734] underline underline-offset-2"
                        onClick={retryMount}
                    >
                        Erneut versuchen
                    </button>
                </div>
            ) : null}

            {canMount ? (
                <PlanityHost
                    key={mountId}
                    apiKey={apiKey}
                    onLive={handleLive}
                    onError={handleError}
                />
            ) : null}
        </div>
    );
}
