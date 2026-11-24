"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const cleanups: Array<() => void> = [];
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".hero-entrance", { y: 34, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 38, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" } });
      });
      gsap.to(".hero-glow", { y: 75, scale: 1.12, ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1 } });

      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card) => {
        const glow = card.querySelector<HTMLElement>("[data-card-glow]");
        const enter = () => {
          gsap.to(card, { y: -7, scale: 1.012, duration: 0.32, ease: "power2.out", overwrite: true });
          if (glow) gsap.to(glow, { opacity: 1, duration: 0.25 });
        };
        const leave = () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.55, ease: "elastic.out(1,.55)", overwrite: true });
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "elastic.out(1,.5)" });
          if (glow) gsap.to(glow, { opacity: 0, duration: 0.35 });
        };
        const move = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, { rotateY: x * 7, rotateX: -y * 6, transformPerspective: 950, duration: 0.35, ease: "power2.out" });
        };
        card.addEventListener("pointerenter", enter);
        card.addEventListener("pointerleave", leave);
        card.addEventListener("pointermove", move);
        card.addEventListener("focusin", enter);
        card.addEventListener("focusout", leave);
        cleanups.push(() => {
          card.removeEventListener("pointerenter", enter);
          card.removeEventListener("pointerleave", leave);
          card.removeEventListener("pointermove", move);
          card.removeEventListener("focusin", enter);
          card.removeEventListener("focusout", leave);
        });
      });

      // Animate only direct navigation links; nested labels and icons are ignored.
      gsap.utils.toArray<HTMLElement>(".nav-item").forEach((item) => {
        const line = item.querySelector<HTMLElement>(".nav-underline");
        const enter = () => {
          gsap.to(item, { color: "#8bd8ff", y: -2, duration: 0.22, ease: "power2.out" });
          if (line) gsap.to(line, { scaleX: 1, duration: 0.3, ease: "power3.out" });
        };
        const leave = () => {
          gsap.to(item, { color: "#a8b7c8", y: 0, duration: 0.28, ease: "power2.out" });
          if (line) gsap.to(line, { scaleX: 0, duration: 0.28, ease: "power2.inOut" });
        };
        item.addEventListener("pointerenter", enter);
        item.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          item.removeEventListener("pointerenter", enter);
          item.removeEventListener("pointerleave", leave);
        });
      });
    }, node);
    return () => { cleanups.forEach((cleanup) => cleanup()); ctx.revert(); };
  }, []);
  return <div ref={root}>{children}</div>;
}
