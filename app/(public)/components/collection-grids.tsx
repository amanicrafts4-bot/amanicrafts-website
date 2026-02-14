import { Suspense } from "react"
import Link from "next/link"
import * as motion from "framer-motion/client" // Use client-specific motion for Next.js 16
import { CollectionSkeleton } from "./collection-skeleton"
import CollectionGridContent from "./collection-grid-content"

export function CollectionGrids() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-orange-400 mb-3 block italic">Explore Our</span>
          <h2 className="font-serif text-3xl lg:text-5xl mb-4 italic">Featured Creations</h2>
          <p className="text-muted-foreground tracking-wide max-w-md mx-auto">
            Handcrafted treasures from South African artisans celebrating heritage and culture
          </p>
        </motion.div>

        {/* This boundary allows the Header to show instantly via PPR */}
        <Suspense fallback={<CollectionSkeleton />}>
          <CollectionGridContent />
        </Suspense>

        <div className="text-center mt-16 lg:mt-24">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:border-transparent transition-colors duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
