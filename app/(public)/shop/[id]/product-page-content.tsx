"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { ProductGallery } from "@/components/product-gallery"
import { ProductPageClient } from "@/components/product-page-client"

export function ProductPageContent({ product, accordionItems }: any) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground uppercase tracking-widest">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gallery uses your Prisma images array */}
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* This component handles Add to Cart, Size, and Color selectors */}
          <ProductPageClient 
            product={product} 
            accordionItems={accordionItems} 
          />
        </div>
      </section>
    </>
  )
}
