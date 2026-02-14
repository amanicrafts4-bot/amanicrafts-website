import { HeroSection } from "@/components/hero-section"
import { CollectionGrid } from "@/components/collection-grid"
import { MarketplaceSection } from "@/components/marketplace-section"
import { HeritageSection } from "@/components/heritage-section"
import { PremiumFooter } from "@/components/premium-footer"
import { Suspense } from "react"
import { ShopSkeleton } from "@/components/public/shop-skeleton"
import ProductGrid from "./shop/product-grid"


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <CollectionGrid /> */}
      {/* Product Section with Shimmer */}
            <section className="py-16 md:py-24">
              <div className="max-w-7xl mx-auto px-6">
                <Suspense fallback={<ShopSkeleton />}>
                  <ProductGrid />
                </Suspense>
              </div>
            </section>
      <MarketplaceSection />
      <HeritageSection />
      <PremiumFooter />
    </main>
  )
}