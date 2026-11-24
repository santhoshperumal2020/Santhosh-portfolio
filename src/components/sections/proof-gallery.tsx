import { ExternalLink } from "lucide-react";
import { screenshots } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function ProofGallery() {
 return <section id="proof" className="section">
  <div className="container">
   <SectionHeading eyebrow="Proof of work" title="Inside the" accent="campaigns." description="Original screenshots extracted from the uploaded Work Report. Select a card to inspect its image at full size."/>
   <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {screenshots.map((s,i)=><a data-card key={s.src} href={s.src} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl border border-sky-300/20 bg-[#0b1724]">
      <div data-card-glow className="pointer-events-none absolute inset-0 z-10 bg-sky-300/[.06] opacity-0"/>
      <div className="relative aspect-[1.35] overflow-hidden bg-[#03070b]"><img src={s.src} alt={s.title} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.045]"/><span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] text-white">View full image <ExternalLink size={11}/></span></div>
      <div className="p-5"><p className="eyebrow">{s.type}</p><h3 className="mt-2 font-semibold text-white">{s.title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{s.detail}</p></div>
    </a>)}
   </div>
  </div>
 </section>;
}
