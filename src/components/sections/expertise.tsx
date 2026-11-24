import { BarChart3, Instagram, MousePointer2, Search, Smartphone, Target } from "lucide-react";
import { expertise } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
const icons = [Target,Search,BarChart3,Instagram,MousePointer2,Smartphone];
export function Expertise() {
 return <section id="expertise" className="section bg-[#080f18]">
  <div className="container">
   <SectionHeading eyebrow="Expertise" title="Tools of" accent="the trade." description="A practical mix of paid media, search, analytics, social media and creative execution."/>
   <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {expertise.map((item,i)=>{const Icon=icons[i];return <article data-card key={item.title} className={`expertise-card expertise-${i} relative overflow-hidden rounded-2xl border border-sky-300/25 bg-[#0b1724] p-6 md:p-7`}>
      <div data-card-glow className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-300/[.10] to-transparent opacity-0"/>
      <div className="relative"><div className="flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-sky-200"><Icon size={21}/></div><span className="text-[10px] font-bold tracking-[.2em] text-slate-500">0{i+1}</span></div>
       <h3 className="mt-8 text-xl font-semibold">{item.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">{item.description}</p>
       <div className="mt-5 flex flex-wrap gap-2">{item.tools.map(tool=><span key={tool} className="rounded-lg border border-white/10 bg-white/[.03] px-2.5 py-1.5 text-[10px] text-slate-300">{tool}</span>)}</div>
      </div>
    </article>})}
   </div>
  </div>
 </section>;
}
