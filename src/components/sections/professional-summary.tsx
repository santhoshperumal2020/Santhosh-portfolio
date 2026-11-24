import { SectionHeading } from "./section-heading";
export function ProfessionalSummary() {
 return <section id="summary" className="section">
  <div className="container grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
   <SectionHeading eyebrow="Professional summary" title="Marketing with" accent="purpose."/>
   <div data-reveal className="rounded-3xl border border-sky-300/20 bg-gradient-to-br from-[#0d1c2b] to-[#080f18] p-7 md:p-10">
    <p className="text-lg leading-9 text-slate-200 md:text-xl">Digital Marketing Executive with experience in Meta Ads, Google Ads, SEO, social media marketing, lead generation and app growth. Skilled in campaign setup and optimization, audience targeting, performance reporting, short-form video editing and Canva creative design across tourism, recruitment, software and overseas education campaigns.</p>
    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
     {["Paid media","SEO & SEM","Lead generation","App growth"].map((x)=><div key={x} className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-3 text-center text-xs text-sky-100">{x}</div>)}
    </div>
   </div>
  </div>
 </section>;
}
