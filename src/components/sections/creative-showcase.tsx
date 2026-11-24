"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Instagram } from "lucide-react";
import { creativeGroups } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

function InfiniteCreativeRow({ company, items }: { company: string; items: {url:string;type:string}[] }) {
 const track = useRef<HTMLDivElement>(null);
 useEffect(() => {
   const el = track.current;
   if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
   const tween = gsap.to(el, { xPercent: -50, duration: Math.max(32, items.length * 2.5), ease: "none", repeat: -1 });
   const pause = () => tween.pause();
   const play = () => tween.play();
   el.addEventListener("pointerenter", pause);
   el.addEventListener("pointerleave", play);
   return () => { el.removeEventListener("pointerenter", pause); el.removeEventListener("pointerleave", play); tween.kill(); };
 }, [items.length]);
 return <div className="creative-viewport">
   <div ref={track} className="creative-track flex w-max gap-4 px-6">
    {[...items,...items].map((item,i)=><a key={`${company}-${i}`} href={item.url} target="_blank" rel="noreferrer" className="creative-card group relative flex h-[190px] w-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-sky-300/25 bg-gradient-to-br from-[#142c43] via-[#0c1b2b] to-[#080e17] p-5 transition-colors hover:border-sky-200/70">
      <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-sky-300/10 blur-2xl transition group-hover:bg-sky-300/25"/>
      <div className="relative flex items-center justify-between"><Instagram size={19} className="text-sky-200"/><span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-widest text-slate-300">{item.type}</span></div>
      <div className="relative flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.16em] text-sky-300">{company}</p><p className="mt-2 text-sm font-semibold text-white">Creative {String((i%items.length)+1).padStart(2,"0")}</p></div><ArrowUpRight className="text-sky-200 transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
    </a>)}
   </div>
 </div>;
}

export function CreativeShowcase() {
 return <section id="creative" className="section bg-[#080f18] overflow-hidden">
  <div className="container"><SectionHeading eyebrow="Creative & content" title="Made for the" accent="scroll." description="All Instagram reel, carousel and poster references are grouped under the company names used in your work report. Hover a slider to pause it." /></div>
  {creativeGroups.map((group)=><div key={group.company} className="mb-12">
    <div className="container mb-5 flex flex-wrap items-end justify-between gap-3"><div><h3 className="text-xl font-semibold">{group.company}</h3><p className="mt-1 text-xs text-slate-400">{group.description} · {group.items.length} references</p></div><span className="text-[10px] uppercase tracking-[.18em] text-sky-300">Reels / posts / carousel</span></div>
    <InfiniteCreativeRow company={group.company} items={group.items}/>
  </div>)}
  <div className="container mt-6 text-xs text-slate-500">The links open the original Instagram posts. Thumbnails are not embedded because the report supplies URLs rather than image files for these posts.</div>
 </section>;
}
