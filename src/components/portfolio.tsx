import { AnimationProvider } from "@/components/animations/animation-provider";
import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { ProfessionalSummary } from "@/components/sections/professional-summary";
import { About } from "@/components/sections/about";
import { Results } from "@/components/sections/results";
import { Projects } from "@/components/sections/projects";
import { ProofGallery } from "@/components/sections/proof-gallery";
import { CreativeShowcase } from "@/components/sections/creative-showcase";
import { Resources } from "@/components/sections/resources";
import { Expertise } from "@/components/sections/expertise";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Portfolio() {
  return <AnimationProvider>
    <main className="overflow-hidden">
      <SiteHeader />
      <Hero />
      <ProfessionalSummary />
      <About />
      <Results />
      <Projects />
      <ProofGallery />
      <CreativeShowcase />
      <Resources />
      <Expertise />
      <Experience />
      <Contact />
    </main>
  </AnimationProvider>;
}
