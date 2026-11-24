import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Projects() {
 return <section id="work" className="section bg-[#080f18]">
  <div className="container">
   <SectionHeading eyebrow="Selected projects" title="Work that" accent="moves metrics." description="A selection of campaign and content work across paid media, search marketing and app growth."/>
   <div className="grid gap-5 md:grid-cols-2">
    {projects.map((p,i)=><article data-card key={p.name} className="group relative overflow-hidden rounded-3xl border border-sky-300/20 bg-gradient-to-br from-[#101f30] to-[#09121d] p-7 md:p-9">
      <div data-card-glow className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-300/10 via-transparent to-transparent opacity-0"/>
      <div className="relative">
       <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.2em] text-sky-300">{p.category}</span><ArrowUpRight className="text-sky-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
       <h3 className="mt-10 text-3xl font-semibold tracking-tight">{p.name}</h3>
       <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">{p.description}</p>
       <div className="mt-6 flex flex-wrap gap-2">{p.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[10px] text-slate-300">{tag}</span>)}</div>
       <div className="mt-8 rounded-xl border border-sky-300/15 bg-sky-300/[.05] p-4 text-sm font-medium text-sky-100">{p.result}</div>
      </div>
    </article>)}
   </div>
  </div>
 </section>;
}
