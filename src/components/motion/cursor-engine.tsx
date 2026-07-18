"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Raven } from "@/components/motion/raven";
import {
  Crystal,
  CursorGlyphDefs,
  EnergyRing,
  Flower,
  MiniJester,
  Quill,
  Shard,
  Sigil,
  TarotWheel,
} from "@/components/motion/cursor-glyphs";
import {
  CURSOR_STATE_EVENT,
  CURSOR_TOGGLE_EVENT,
  type CursorStateEventDetail,
} from "@/lib/cursor-events";
import { getFlag } from "@/lib/persisted-flag";

type HoverState = "default" | "link" | "button" | "interactive";
type EngineState =
  HoverState | "dragging" | "typing" | "loading" | "success" | "error";

const TRAIL_LENGTH = 10;

function resolveHoverState(target: EventTarget | null): HoverState {
  if (!(target instanceof HTMLElement)) return "default";
  if (target.closest("a")) return "link";
  if (target.closest("button, [role='button']")) return "button";
  if (target.closest("input, textarea, select, [tabindex]"))
    return "interactive";
  return "default";
}

function isTextField(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLElement && Boolean(target.closest("input, textarea"))
  );
}

export function CursorEngine() {
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [hoverState, setHoverState] = useState<HoverState>("default");
  const [dragging, setDragging] = useState(false);
  const [typing, setTyping] = useState(false);
  const [transient, setTransient] = useState<CursorStateEventDetail | null>(
    null,
  );
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.6 });

  const trailRef = useRef<HTMLCanvasElement>(null);
  const trailPoints = useRef<{ x: number; y: number }[]>([]);
  const rippleId = useRef(0);
  const transientTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setReady(canHover && !prefersReducedMotion);
    setEnabled(!getFlag("cursor-disabled"));
  }, []);

  useEffect(() => {
    const onToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ enabled: boolean }>).detail;
      setEnabled(detail.enabled);
    };
    window.addEventListener(CURSOR_TOGGLE_EVENT, onToggle);
    return () => window.removeEventListener(CURSOR_TOGGLE_EVENT, onToggle);
  }, []);

  useEffect(() => {
    if (!ready || !enabled) return;
    document.documentElement.classList.add("cursor-engine-active");
    return () =>
      document.documentElement.classList.remove("cursor-engine-active");
  }, [ready, enabled]);

  useEffect(() => {
    if (!ready || !enabled) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      trailPoints.current.push({ x: event.clientX, y: event.clientY });
      if (trailPoints.current.length > TRAIL_LENGTH) {
        trailPoints.current.shift();
      }
    };
    const onOver = (event: PointerEvent) => {
      setHoverState(resolveHoverState(event.target));
    };
    const onDown = (event: PointerEvent) => {
      setDragging(true);
      const id = rippleId.current++;
      setRipples((current) => [
        ...current,
        { id, x: event.clientX, y: event.clientY },
      ]);
    };
    const onUp = () => setDragging(false);
    const onFocusIn = (event: FocusEvent) =>
      setTyping(isTextField(event.target));
    const onFocusOut = () => setTyping(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("focusin", onFocusIn);
    window.addEventListener("focusout", onFocusOut);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("focusout", onFocusOut);
    };
  }, [ready, enabled, x, y]);

  useEffect(() => {
    if (!ready || !enabled) return;
    const onStateEvent = (event: Event) => {
      const detail = (event as CustomEvent<CursorStateEventDetail>).detail;
      setTransient(detail);
      if (transientTimeout.current) clearTimeout(transientTimeout.current);
      transientTimeout.current = setTimeout(
        () => setTransient(null),
        detail.durationMs,
      );
    };
    window.addEventListener(CURSOR_STATE_EVENT, onStateEvent);
    return () => window.removeEventListener(CURSOR_STATE_EVENT, onStateEvent);
  }, [ready, enabled]);

  // Particle trail canvas — resize-aware, rAF-driven, matching starfield.tsx.
  useEffect(() => {
    if (!ready || !enabled) return;
    const canvas = trailRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const points = trailPoints.current;
      points.forEach((point, index) => {
        const alpha = ((index + 1) / points.length) * 0.28;
        ctx.beginPath();
        ctx.fillStyle = `color-mix(in oklab, var(--violet) ${Math.round(
          alpha * 100,
        )}%, transparent)`;
        ctx.arc(point.x, point.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [ready, enabled]);

  if (!ready || !enabled) return null;

  const activeState: EngineState =
    transient?.state ??
    (dragging ? "dragging" : typing ? "typing" : hoverState);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70]"
      aria-hidden="true"
    >
      <canvas ref={trailRef} className="fixed inset-0" />

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 2.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() =>
              setRipples((current) => current.filter((r) => r.id !== ripple.id))
            }
            className="border-accent fixed h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{ left: ripple.x, top: ripple.y }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      >
        <AnimatePresence mode="wait">
          {activeState === "dragging" ? (
            <motion.div
              key="dragging"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="h-8 w-8"
            >
              <Raven mode="companion" />
            </motion.div>
          ) : (
            <motion.svg
              key={activeState}
              viewBox="0 0 40 40"
              className="h-10 w-10"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <CursorGlyphDefs />
              {activeState === "link" && <MiniJester />}
              {activeState === "button" && <Sigil />}
              {activeState === "interactive" && <EnergyRing />}
              {activeState === "typing" && <Quill />}
              {activeState === "loading" && <TarotWheel />}
              {activeState === "success" && <Flower />}
              {activeState === "error" && <Shard />}
              {activeState === "default" && <Crystal />}
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
