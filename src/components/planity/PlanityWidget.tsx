"use client";

import "@/styles/planity.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { useOverlayLock } from "@/hooks/useOverlayLock";

const PLANITY_HEADER_OFFSET = "136px";

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

let planityScriptsLoaded = false;
let planityScriptsLoading: Promise<void> | null = null;
let planityMountedContainer: HTMLElement | null = null;
let planityBootGeneration = 0;

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

function injectScript(src: string, force = false): Promise<void> {
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);

        if (existing && !force) {
            resolve();
            return;
        }

        if (existing) {
            existing.remove();
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Planity script failed: ${src}`));
        document.body.appendChild(script);
    });
}

function resetGoogleMapsLoader() {
    document
        .querySelectorAll('script[src*="maps.googleapis.com/maps/api/js"]')
        .forEach((node) => node.remove());
    delete window.google;
}

async function loadPlanityScriptsFirstTime(): Promise<void> {
    if (planityScriptsLoaded) return;
    if (planityScriptsLoading) {
        await planityScriptsLoading;
        return;
    }

    planityScriptsLoading = (async () => {
        await injectScript(POLYFILLS_SRC);
        await injectScript(APP_SRC);
        planityScriptsLoaded = true;
    })().finally(() => {
        planityScriptsLoading = null;
    });

    await planityScriptsLoading;
}

async function remountPlanityApp(container: HTMLElement, apiKey: string): Promise<void> {
    configurePlanity(container, apiKey);
    container.replaceChildren();
    resetGoogleMapsLoader();
    await injectScript(APP_SRC, true);
    planityMountedContainer = container;
}

async function initializePlanity(container: HTMLElement, apiKey: string, generation: number): Promise<void> {
    if (generation !== planityBootGeneration) return;

    configurePlanity(container, apiKey);

    if (isPlanityLive(container)) {
        planityMountedContainer = container;
        return;
    }

    const previousContainerGone =
        planityMountedContainer !== null &&
        planityMountedContainer !== container &&
        !planityMountedContainer.isConnected;

    if (!planityScriptsLoaded) {
        planityMountedContainer = container;
        await loadPlanityScriptsFirstTime();
        return;
    }

    if (previousContainerGone || (planityMountedContainer !== container && container.childElementCount === 0)) {
        await remountPlanityApp(container, apiKey);
    }
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
    const apiKey = process.env.NEXT_PUBLIC_PLANITY_API_KEY;
    const [hasOverlay, setHasOverlay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    useOverlayLock(hasOverlay);

    const evaluateOverlays = useCallback(() => {
        setHasOverlay(hasActivePlanityOverlay());
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !apiKey) return;

        const generation = ++planityBootGeneration;
        let cancelled = false;

        if (isPlanityLive(container)) {
            configurePlanity(container, apiKey);
            setIsLoading(false);
            setLoadError(false);
        } else {
            setIsLoading(true);
            setLoadError(false);
        }

        const bootTimer = window.setTimeout(() => {
            if (cancelled || generation !== planityBootGeneration) return;

            void initializePlanity(container, apiKey, generation)
                .then(() => {
                    if (cancelled || generation !== planityBootGeneration) return;
                    evaluateOverlays();
                    if (isPlanityLive(container)) {
                        setIsLoading(false);
                    }
                })
                .catch(() => {
                    if (!cancelled && generation === planityBootGeneration) {
                        setLoadError(true);
                        setIsLoading(false);
                    }
                });
        }, 0);

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
            if (!cancelled && generation === planityBootGeneration && !isPlanityLive(container)) {
                setLoadError(true);
                setIsLoading(false);
            }
        }, 12000);

        return () => {
            cancelled = true;
            window.clearTimeout(bootTimer);
            contentObserver.disconnect();
            overlayObserver.disconnect();
            document.removeEventListener("focusin", onFocusIn);
            window.clearInterval(interval);
            window.clearTimeout(loadingTimeout);

            if (planityMountedContainer === container && !container.isConnected) {
                planityMountedContainer = null;
            }
        };
    }, [apiKey, evaluateOverlays]);

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
                        onClick={() => window.location.reload()}
                    >
                        Seite neu laden
                    </button>
                </div>
            ) : null}

            <div id="planity-appointment" ref={containerRef} className="w-full min-h-[120px]" />
        </div>
    );
}
