"use client";
import { navItems } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-200/10 bg-[#05090f]/85 backdrop-blur-2xl">
      <div className="container flex h-[76px] items-center justify-between">
        <a href="#home" aria-label="Santhoshperumal home" className="group flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-sm text-sky-200 transition group-hover:rotate-[-8deg] group-hover:border-sky-200">SP</span>
          <span>SANTHOSHPERUMAL J<span className="text-sky-300">.</span></span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a className="nav-item relative py-3 text-xs font-medium text-[#a8b7c8]" href={item.href} key={item.href}>
              {item.label}<span className="nav-underline absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-sky-300" />
            </a>
          ))}
        </nav>
        <a href="mailto:santhoshperumal2020@gmail.com" className="hidden items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-2.5 text-xs font-semibold text-sky-100 transition hover:border-sky-200 hover:bg-sky-300/20 md:flex">
          Let’s talk <ArrowUpRight size={14}/>
        </a>
        <button className="rounded-lg border border-white/15 px-3 py-2 text-xs text-sky-100 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>Menu</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#07111c] px-6 py-4 md:hidden">
        {navItems.map((item) => <a key={item.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-sm text-slate-200" href={item.href}>{item.label}</a>)}
      </nav>}
    </header>
  );
}
