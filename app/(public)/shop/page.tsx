import { Suspense } from "react"
import { connection } from "next/server"
import { prisma } from "@/lib/prisma"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { ShopSkeleton } from "@/components/public/shop-skeleton"
import ProductGrid from "./product-grid" // We'll create this next

export default async function ShopPage() {
  // Static Parts of the page render immediately
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Banner - Static Shell */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/cpt-Markets-feature.jpg" alt="Shop" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-background px-6 pt-20">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tighter">The Collection</h1>
          <p className="text-lg md:text-xl text-background/80 max-w-xl mx-auto">
            Timeless pieces crafted with intention and heritage.
          </p>
        </div>
      </section>

      {/* Product Section with Shimmer */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Suspense fallback={<ShopSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
