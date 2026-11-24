import { Download, Mail, Phone, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
export function Contact() {
 return <section id="contact" className="section relative overflow-hidden bg-[#08111c]">
  <div className="hero-glow pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-sky-300/10 blur-[100px]"/>
  <div className="container relative">
   <SectionHeading eyebrow="Contact" title="Let’s make good" accent="things happen." description="Have a campaign, content project or digital growth opportunity in mind? Let’s connect."/>
   <div className="flex flex-col justify-between gap-8 border-t border-sky-300/20 pt-8 md:flex-row md:items-end">
    <div className="space-y-5">
     <a href="mailto:santhoshperumal2020@gmail.com" className="flex items-center gap-3 text-lg text-white transition hover:text-sky-200"><Mail size={19} className="text-sky-300"/>santhoshperumal2020@gmail.com</a>
     <a href="tel:+916380485693" className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-sky-200"><Phone size={17} className="text-sky-300"/>+91 63804 85693</a>
     <a href="https://www.linkedin.com/in/santhoshperumal-j" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-sky-200"><ArrowUpRight size={17} className="text-sky-300"/>LinkedIn profile</a>
     <p className="text-xs text-slate-500">Chennai, India · Tamil · English · Kannada</p>
    </div>
    <a href="/Santhoshperumal-Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-sky-300/10 px-6 py-4 text-sm font-semibold text-sky-100 transition hover:-translate-y-1 hover:bg-sky-300/20">Download resume <Download size={16}/></a>
   </div>
   <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.18em] text-slate-500 md:flex-row"><span>© {new Date().getFullYear()} Santhoshperumal J</span><span>Strategy · Creativity · Measurable growth</span></footer>
  </div>
 </section>;
}
