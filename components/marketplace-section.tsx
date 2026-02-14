'use client';

import { motion } from "framer-motion"
import Image from "next/image"

export function MarketplaceSection() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-3 block">Where It All Begins</span>
          <h2 className="font-serif text-3xl lg:text-5xl mb-6 text-balance">
            Greenmarket Square, Cape Town
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Since 2012, this historic marketplace has been the heart of Cape Town's cultural exchange. Every Amanicraft piece is sourced directly from artisans at Greenmarket Square, supporting communities and preserving authentic craftsmanship.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:row-span-2 relative h-80 md:h-full overflow-hidden rounded-lg"
          >
            <Image
              src="/amanicrafts5.jpg"
              alt="Greenmarket Square marketplace"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right column images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <Image
              src="/amanicrafts6.jpg"
              alt="Traditional beaded jewelry at Greenmarket Square"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 overflow-hidden rounded-lg"
          >
            <Image
              src="/amanicrafts7.jpg"
              alt="Vibrant artwork and textiles at the square"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-12 lg:pt-16 border-t border-border"
        >
          <div className="text-center">
            <h3 className="font-serif text-3xl lg:text-4xl mb-2 text-primary">370+</h3>
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Years of Heritage</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-3xl lg:text-4xl mb-2 text-primary">200+</h3>
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Artisan Vendors</p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-3xl lg:text-4xl mb-2 text-primary">100%</h3>
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Authentic & Handmade</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
