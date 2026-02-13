import { HeroSection } from "@/components/hero-section"
import { CollectionGrid } from "@/components/collection-grid"
import { MarketplaceSection } from "@/components/marketplace-section"
import { HeritageSection } from "@/components/heritage-section"
import { PremiumFooter } from "@/components/premium-footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <CollectionGrid /> */}
      <MarketplaceSection />
      <HeritageSection />
      <PremiumFooter />
    </main>
  )
}