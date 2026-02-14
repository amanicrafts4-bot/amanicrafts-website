import { HeroSection } from "@/components/hero-section"
import { MarketplaceSection } from "@/components/marketplace-section"
import { HeritageSection } from "@/components/heritage-section"
import { PremiumFooter } from "@/components/premium-footer"
import { CollectionGrids } from "./components/collection-grid"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />  
      {/* Product Section with Shimmer */}
      <CollectionGrids />
      <MarketplaceSection />
      <HeritageSection />
      <PremiumFooter />
    </main>
  )
}