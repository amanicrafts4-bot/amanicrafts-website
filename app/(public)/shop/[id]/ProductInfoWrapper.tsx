// app/shop/[id]/ProductInfoWrapper.tsx
'use client';

import { ProductGallery } from "@/components/product-gallery";
import { ProductPageClient } from "@/components/product-page-client";
import { motion } from "framer-motion";
// Import your other components like ProductGallery, etc.

export function ProductInfoWrapper({ product }: { product: any }) {

       const accordionItems = [
    {
      title: "Details",
      content: product?.description,
    },
    {
      title: "Materials",
      content: product?.description,
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

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ProductGallery and ProductPageClient go here */}
          <ProductGallery images={product.images} productName={product.name} />
        </motion.div>
        
        <ProductPageClient product={product} accordionItems={accordionItems} />
      </div>
    </section>
  );
}
