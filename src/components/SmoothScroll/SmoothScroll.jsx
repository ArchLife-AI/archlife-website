import { useEffect } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";

/**
 * Site-wide smooth scroll + section snap.
 *
 * - Lenis: damped wheel/anchor scroll on desktop (lerp 0.085, ~1.15s ease-out)
 * - Snap: when the user stops within ~30% of viewport height from a <section>
 *   boundary, gently glides them into alignment. If they keep scrolling, no snap.
 *   This is "proximity" snapping — assists rather than forces.
 * - Touch devices: Lenis disabled (iOS Safari native inertia is silky and
 *   intercepting it causes address-bar jitter).
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const isTouchPrimary = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      lerp: 0.085,
    });

    const snap = new Snap(lenis, {
      type: "proximity",
      lerp: 0.1,
      duration: 0.9,
      distanceThreshold: "30%",
      debounce: 200,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Register all <section> elements as snap targets after first paint.
    // 150ms gives Reveal animations, fonts, and images time to settle so
    // the snap rect calculations are accurate.
    const registrationTimer = setTimeout(() => {
      const sections = document.querySelectorAll("section");
      sections.forEach((el) => {
        snap.addElement(el, { align: ["start"] });
      });
    }, 150);

    if (isTouchPrimary) {
      lenis.stop();
      snap.stop();
    }

    return () => {
      clearTimeout(registrationTimer);
      cancelAnimationFrame(rafId);
      snap.destroy();
      lenis.destroy();
    };
  }, []);

  return null;
}
