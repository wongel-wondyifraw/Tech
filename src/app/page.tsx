import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSolutionsShowcase } from "@/components/sections/tech-solutions-showcase";
import { PinnedJourneySection } from "@/components/sections/pinned-journey-section";
import { GatheringsSection } from "@/components/sections/gatherings-section";

export default function Home() {
  return (
    <div id="home-page" className="home-page flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="main-content flex-1">
        <HeroSection />
        <TechSolutionsShowcase />
        <PinnedJourneySection />
        <GatheringsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
