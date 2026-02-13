'use client';

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { ProductGallery } from "@/components/product-gallery"
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { ProductDetailsAccordion } from "@/components/product-details-accordion"
import { RelatedProducts } from "@/components/related-products"
import { ProductPageClient } from "@/components/product-page-client"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { ChevronRight } from "lucide-react"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(id, 4)

  const accordionItems = [
    {
      title: "Details",
      content: product.details,
    },
    {
      title: "Materials",
      content: product.materials,
    },
    {
      title: "Care",
      content: product.care,
    },
    {
      title: "Shipping & Returns",
      content: [
        "Complimentary shipping on all orders",
        "Express delivery available",
        "Free returns within 30 days",
        "Items must be unworn with tags attached",
      ],
    },
  ]

  const galleryImages = [
    product.image,
    product.hoverImage,
    product.image.replace("query=", "query=detail "),
    product.hoverImage.replace("query=", "query=closeup "),
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={galleryImages} productName={product.name} />
          </motion.div>

          {/* Product Info - Client Component */}
          <ProductPageClient product={product} accordionItems={accordionItems} />
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <PremiumFooter />
    </main>
  )
}