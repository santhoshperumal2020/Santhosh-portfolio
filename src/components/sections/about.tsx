import { BarChart3, Search, Target, Smartphone } from "lucide-react";
import { SectionHeading } from "./section-heading";
const pillars = [
 {icon:Target,title:"Meta Ads",detail:"Paid social & lead generation"},
 {icon:Search,title:"Google Ads",detail:"Search & app campaigns"},
 {icon:BarChart3,title:"SEO & analytics",detail:"Visibility & performance insights"},
 {icon:Smartphone,title:"Social & creative",detail:"Content, reels & design"},
];
export function About() {
 return <section id="about" className="section bg-[#080f18]">
  <div className="container">
   <SectionHeading eyebrow="About" title="Curious by" accent="nature." description="I bring campaign execution, creative thinking and performance analysis together to support measurable digital growth."/>
   <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {pillars.map(({icon:Icon,title,detail},i)=><article data-card key={title} className="relative overflow-hidden rounded-2xl border border-sky-300/20 bg-[#0b1724] p-6">
     <div data-card-glow className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-300/10 to-transparent opacity-0"/>
     <div className="relative"><div className="mb-8 grid h-11 w-11 place-items-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-sky-200"><Icon size={20}/></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></div>
    </article>)}
   </div>
  </div>
 </section>;
}
