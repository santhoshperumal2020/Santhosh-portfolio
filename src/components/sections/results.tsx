import { metrics } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Results() {
 return <section id="results" className="section">
  <div className="container">
   <SectionHeading eyebrow="Selected results" title="Numbers with" accent="context." description="Selected figures transcribed from the campaign reports and resume. Each metric is labeled with its reporting source."/>
   <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
    {metrics.map((m,i)=><article data-card data-count key={m.label} className={`metric-card metric-style-${i%4} relative overflow-hidden rounded-2xl border border-sky-300/20 bg-[#0b1724] p-5 md:p-7`}>
      <div data-card-glow className="pointer-events-none absolute inset-0 bg-sky-300/[.07] opacity-0"/>
      <div className="relative"><p className="text-3xl font-semibold tracking-[-.06em] text-sky-200 md:text-4xl">{m.value}</p><h3 className="mt-3 min-h-10 text-sm font-medium text-white">{m.label}</h3><p className="mt-2 text-[11px] leading-5 text-slate-500">{m.source}</p></div>
    </article>)}
   </div>
   <div data-card className="mt-6 rounded-2xl border border-sky-300/20 bg-gradient-to-r from-[#102338] to-[#0a1420] p-6 md:flex md:items-center md:justify-between">
    <div><p className="font-semibold text-sky-100">Techietet · Meta campaign efficiency</p><p className="mt-2 text-sm text-slate-300">₹0.27–₹0.70 cost per engagement · ₹71 per WhatsApp conversation</p></div>
    <p className="mt-4 text-xs text-slate-400 md:mt-0">Reported budget: approximately ₹27,000</p>
   </div>
  </div>
 </section>;
}
