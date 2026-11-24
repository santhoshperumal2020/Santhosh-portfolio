import { ArrowDown, ArrowUpRight, Download, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return <section id="home" className="relative flex min-h-[850px] items-center overflow-hidden pt-24">
    <div className="grid-bg absolute inset-0"/>
    <div className="hero-glow pointer-events-none absolute right-[-12%] top-[14%] h-[540px] w-[540px] rounded-full bg-sky-400/10 blur-[110px]"/>
    <div className="container relative grid items-center gap-14 py-24 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <p className="hero-entrance eyebrow mb-8 flex items-center gap-3"><span className="h-px w-10 bg-sky-300"/> Digital Marketing Executive · Performance Marketing & SEO</p>
        <h1 className="hero-entrance max-w-4xl text-[clamp(4rem,10vw,8.5rem)] font-semibold leading-[.84] tracking-[-.085em]">Make every<br/>click <span className="text-sky-300">count.</span></h1>
        <p className="hero-entrance mt-9 max-w-xl text-base leading-8 text-slate-300 md:text-lg">I’m Santhoshperumal — I plan, optimize and analyze digital campaigns that connect the right audience with the right message.</p>
        <div className="hero-entrance mt-9 flex flex-wrap gap-3">
          <Button asChild><a href="#work">Explore my work <ArrowUpRight size={16}/></a></Button>
          <Button asChild variant="outline"><a href="/Santhoshperumal-Resume.pdf" target="_blank" rel="noreferrer">View resume <Download size={15}/></a></Button>
        </div>
        <div className="hero-entrance mt-14 flex items-center gap-3 text-xs text-slate-400"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-60"/><span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300"/></span> Open to digital marketing opportunities</div>
      </div>
      <div data-card className="relative mx-auto w-full max-w-[420px] rounded-[30px] border border-sky-200/25 bg-gradient-to-br from-[#14283c] to-[#08111c] p-7 shadow-[0_30px_100px_rgba(56,189,248,.12)]">
        <div data-card-glow className="pointer-events-none absolute inset-0 rounded-[30px] bg-sky-300/[.07] opacity-0"/>
        <div className="relative flex items-center justify-between"><span className="eyebrow">Campaign mindset</span><MousePointer2 className="text-sky-300" size={18}/></div>
        <div className="relative mt-16"><div className="text-6xl font-semibold tracking-[-.08em]">ROI<span className="text-sky-300">.</span></div><p className="mt-3 max-w-[230px] text-sm leading-6 text-slate-300">Strategy, creative and optimization — aligned around measurable outcomes.</p></div>
        <div className="relative mt-16 space-y-4">
          {[["Audience","Precision","84%"],["Performance","Iteration","72%"],["Creative","Testing","78%"]].map(([label,value,width])=><div key={label}><div className="mb-2 flex justify-between text-xs"><span className="text-slate-300">{label}</span><span className="text-sky-200">{value}</span></div><div className="h-1 rounded-full bg-white/10"><div className="h-1 rounded-full bg-sky-300" style={{width}}/></div></div>)}
        </div>
        <div className="relative mt-8 border-t border-white/10 pt-5 text-xs text-slate-400">Paid media <span className="mx-2 text-sky-300">/</span> SEO <span className="mx-2 text-sky-300">/</span> Growth</div>
      </div>
    </div>
    <a href="#summary" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.2em] text-slate-400 md:flex">Scroll to explore <ArrowDown size={13}/></a>
  </section>;
}
