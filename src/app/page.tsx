import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { MeatSection } from "@/components/meat-section";
import { VibeSection } from "@/components/vibe-section";
import { WeekendSection } from "@/components/weekend-section";
import { PeopleSection } from "@/components/people-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <MeatSection />
      <VibeSection />
      <WeekendSection />
      <PeopleSection />
      <SiteFooter />
    </div>
  );
}
