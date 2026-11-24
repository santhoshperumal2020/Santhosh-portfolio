# Santhoshperumal J — Digital Marketing Portfolio

Premium dark portfolio built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui primitives, GSAP and ScrollTrigger.

## Run locally
1. Install Node.js 20 or later.
2. Extract this folder and open it in VS Code or Cursor.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000.

## Build
- `npm run build`
- `npm start`

## Project structure
- `src/components/portfolio.tsx` — assembles the page sections only.
- `src/components/sections/` — one component per website section (header, hero, summary, about, results, projects, proof gallery, creative showcase, resources, expertise, experience and contact).
- `src/components/animations/animation-provider.tsx` — shared GSAP/ScrollTrigger animation behavior.
- `src/data/portfolio.ts` — editable content, metrics, screenshot descriptions and every social link.
- `src/app/globals.css` — global design tokens, card styles and responsive rules.
- `public/screenshots/` — 18 screenshots extracted from the supplied Work Report.
- `public/Santhoshperumal-Resume.pdf` — supplied resume.

## Creative references included
- Merfish: 3 Instagram reels + 2 carousel posts.
- MyStreakBook: all 27 Instagram reel/post references.
- Tonercycle: all 10 Instagram reel/post references.
- Pinterest: Techietet and MyStreakBook reference collection.
- Medium: Techietet, MyStreakBook, Merfish and Tonercycle article collection.

The report contains URLs for Instagram/Pinterest/Medium, not local thumbnail assets. The portfolio therefore links directly to the original posts and collections rather than inventing preview images.

## GSAP interactions
- Hero entrance stagger and scroll-triggered section reveals.
- Top-level navigation underline and hover motion.
- Pointer-driven 3D card tilt with elastic reset.
- Independent infinite GSAP creative sliders per company, pausing on hover.
- Reduced-motion preference support.
