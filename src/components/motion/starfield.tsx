"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; s: number; o: number };

export function Starfield({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(140, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.3,
        s: Math.random() * 0.15 + 0.02,
        o: Math.random() * 0.6 + 0.25,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const twinkle = prefersReducedMotion
          ? star.o
          : star.o * (0.6 + 0.4 * Math.sin(t * 0.001 * star.s * 10 + star.x));
        ctx.beginPath();
        ctx.fillStyle = `rgba(233,237,243,${twinkle.toFixed(3)})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!prefersReducedMotion && visible) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !prefersReducedMotion) {
          raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
