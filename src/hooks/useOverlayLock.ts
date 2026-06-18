"use client";

import { useEffect } from "react";

let overlayLockCount = 0;

function applyOverlayLockState() {
    if (overlayLockCount > 0) {
        document.documentElement.setAttribute("data-overlay-open", "true");
    } else {
        document.documentElement.removeAttribute("data-overlay-open");
    }
}

export function acquireOverlayLock() {
    overlayLockCount += 1;
    applyOverlayLockState();
}

export function releaseOverlayLock() {
    overlayLockCount = Math.max(0, overlayLockCount - 1);
    applyOverlayLockState();
}

/** Blendet Header/Sticky-Nav aus, solange ein Pop-up/Modal aktiv ist. */
export function useOverlayLock(active: boolean) {
    useEffect(() => {
        if (!active) return;

        acquireOverlayLock();
        return () => releaseOverlayLock();
    }, [active]);
}
