import { experience } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
export function Experience() {
 return <section id="experience" className="section">
  <div className="container">
   <SectionHeading eyebrow="Experience" title="The journey" accent="so far."/>
   <div className="max-w-4xl">
    {experience.map((item,i)=><article data-reveal key={item.company} className="experience-row grid gap-4 border-t border-sky-300/20 py-8 md:grid-cols-[190px_1fr]">
      <div className="text-xs font-semibold tracking-[.15em] text-sky-300">{item.date}</div>
      <div><h3 className="text-2xl font-semibold">{item.role}</h3><p className="mt-1 text-sm text-sky-100">{item.company}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{item.desc}</p></div>
    </article>)}
   </div>
  </div>
 </section>;
}
