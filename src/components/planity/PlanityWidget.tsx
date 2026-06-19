"use client";

import "@/styles/planity.css";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useOverlayLock } from "@/hooks/useOverlayLock";

const PLANITY_HEADER_OFFSET = "136px";
const LOAD_TIMEOUT_MS = 25000;

const POLYFILLS_SRC =
    "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js";
const APP_SRC =
    "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js";

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
            appointmentContainer: HTMLElement;
        };
        google?: unknown;
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
        Boolean(container.querySelector(".planity_ui_appointment_background"))
    );
}

function injectScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Planity script failed: ${src}`));
        document.body.appendChild(script);
    });
}

function removeScript(src: string) {
    document.querySelectorAll(`script[src="${src}"]`).forEach((node) => node.remove());
}

function resetGoogleMapsLoader() {
    document
        .querySelectorAll('script[src*="maps.googleapis.com/maps/api/js"]')
        .forEach((node) => node.remove());
    delete window.google;
}

async function ensurePolyfillsLoaded(): Promise<void> {
    if (document.querySelector(`script[src="${POLYFILLS_SRC}"]`)) return;
    await injectScript(POLYFILLS_SRC);
}

let mountPlanityMutex: Promise<void> = Promise.resolve();

async function waitForPlanityLive(container: HTMLElement, timeoutMs = 20000): Promise<boolean> {
    const started = Date.now();

    while (Date.now() - started < timeoutMs) {
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

        removeScript(APP_SRC);
        resetGoogleMapsLoader();
        container.replaceChildren();

        await injectScript(APP_SRC);

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

export default function PlanityWidget() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bootIdRef = useRef(0);
    const apiKey = process.env.NEXT_PUBLIC_PLANITY_API_KEY;
    const [hasOverlay, setHasOverlay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    useOverlayLock(hasOverlay);

    const evaluateOverlays = useCallback(() => {
        setHasOverlay(hasActivePlanityOverlay());
    }, []);

    const bootWidget = useCallback(async () => {
        const container = containerRef.current;
        if (!container || !apiKey) return;

        const bootId = ++bootIdRef.current;
        setIsLoading(true);
        setLoadError(false);

        try {
            await mountPlanityApp(container, apiKey);

            if (bootId !== bootIdRef.current) return;

            setIsLoading(false);
            setLoadError(false);
            evaluateOverlays();
        } catch {
            if (bootId !== bootIdRef.current) return;

            setLoadError(true);
            setIsLoading(false);
        }
    }, [apiKey, evaluateOverlays]);

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container || !apiKey) return;

        if (isPlanityLive(container)) {
            configurePlanity(container, apiKey);
            setIsLoading(false);
            setLoadError(false);
            evaluateOverlays();
            return;
        }

        void bootWidget();

        const contentObserver = new MutationObserver(() => {
            if (isPlanityLive(container)) {
                setIsLoading(false);
                setLoadError(false);
            }
        });

        contentObserver.observe(container, { childList: true, subtree: true });

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
            if (target instanceof HTMLElement && container.contains(target)) {
                evaluateOverlays();
            }
        };

        document.addEventListener("focusin", onFocusIn);
        const interval = window.setInterval(evaluateOverlays, 800);

        const loadingTimeout = window.setTimeout(() => {
            if (!isPlanityLive(container)) {
                setLoadError(true);
                setIsLoading(false);
            }
        }, LOAD_TIMEOUT_MS);

        return () => {
            bootIdRef.current += 1;
            contentObserver.disconnect();
            overlayObserver.disconnect();
            document.removeEventListener("focusin", onFocusIn);
            window.clearInterval(interval);
            window.clearTimeout(loadingTimeout);
        };
    }, [apiKey, bootWidget, evaluateOverlays]);

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
            {isLoading ? (
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
                        onClick={() => void bootWidget()}
                    >
                        Erneut versuchen
                    </button>
                </div>
            ) : null}

            <div id="planity-appointment" ref={containerRef} className="w-full min-h-[120px]" />
        </div>
    );
}
