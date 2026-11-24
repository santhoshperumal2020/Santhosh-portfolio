import { ArrowUpRight, BookOpen, Pin } from "lucide-react";
import { resourceLinks } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Resources() {
 return <section className="section">
  <div className="container">
   <SectionHeading eyebrow="External publications" title="More from the" accent="creative desk." description="Reference collections included in the work report, presented as larger, easy-to-open resource cards."/>
   <div className="grid gap-5 md:grid-cols-2">
    {resourceLinks.map((item,i)=>{const Icon=i===0?Pin:BookOpen;return <a data-card key={item.title} href={item.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl border border-sky-300/25 bg-gradient-to-br from-[#11263a] to-[#09121d] p-7 md:p-9">
      <div data-card-glow className="pointer-events-none absolute inset-0 bg-sky-300/[.08] opacity-0"/>
      <div className="relative"><div className="flex items-center justify-between"><div className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-300/30 bg-sky-300/10 text-sky-200"><Icon size={26}/></div><ArrowUpRight className="text-sky-200 transition group-hover:-translate-y-1 group-hover:translate-x-1" size={22}/></div>
      <p className="mt-9 text-[10px] uppercase tracking-[.2em] text-sky-300">{item.company}</p><h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{item.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-slate-300">{item.description}</p><span className="mt-8 inline-flex rounded-full border border-sky-300/40 bg-sky-300/10 px-5 py-3 text-xs font-semibold text-sky-100">Explore collection <ArrowUpRight size={14} className="ml-2"/></span></div>
    </a>})}
   </div>
  </div>
 </section>;
}
