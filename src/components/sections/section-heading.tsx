export function SectionHeading({ eyebrow, title, accent, description }: { eyebrow?: string; title: string; accent?: string; description?: string }) {
  return <div data-reveal className="mb-12 max-w-3xl">
    {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
    <h2 className="section-title">{title} {accent && <span className="text-sky-300">{accent}</span>}</h2>
    {description && <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">{description}</p>}
  </div>;
}
