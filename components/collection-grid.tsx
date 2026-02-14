"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"

const products = [
  {
    id: "beaded-necklace",
    name: "Traditional Zulu Beaded Necklace",
    price: 280,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Jewelry",
  },
  {
    id: "woven-basket",
    name: "Hand-Woven Seagrass Basket",
    price: 185,
    image: "https://images.unsplash.com/photo-1595523676357-1f5f6b30cf65?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    category: "Decor",
  },
  {
    id: "tribal-wall-art",
    name: "Contemporary Tribal Wall Art",
    price: 420,
    image: "https://images.unsplash.com/photo-1578688846-5382633e102d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    category: "Art",
  },
  {
    id: "shweshwe-fabric",
    name: "Shweshwe Printed Fabric",
    price: 145,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    category: "Textiles",
  },
  {
    id: "leather-satchel",
    name: "Handcrafted Leather Satchel",
    price: 520,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800&q=80",
    category: "Accessories",
  },
  {
    id: "ceramic-vessel",
    name: "Handcrafted Ceramic Vessel",
    price: 310,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&q=80&crop=entropy&cs=tinysrgb",
    category: "Decor",
  },
]

export function CollectionGrid() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="font-serif text-3xl lg:text-5xl mb-4">Featured Creations</h2>
          <p className="text-muted-foreground tracking-wide max-w-md mx-auto">
            Handcrafted treasures from South African artisans celebrating heritage and culture
          </p>
        </motion.div>

        {/* Asymmetrical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* First row - offset layout */}
          <div className="lg:pt-12">
            <ProductCard {...products[0]} index={0} />
          </div>
          <div>
            <ProductCard {...products[1]} index={1} />
          </div>
          <div className="lg:pt-24">
            <ProductCard {...products[2]} index={2} />
          </div>

          {/* Second row - different offset */}
          <div>
            <ProductCard {...products[3]} index={3} />
          </div>
          <div className="lg:pt-16">
            <ProductCard {...products[4]} index={4} />
          </div>
          <div className="lg:-mt-8">
            <ProductCard {...products[5]} index={5} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            href="/shop"
            className="inline-flex items-center text-sm tracking-[0.2em] uppercase border-b border-foreground pb-1 hover:border-transparent transition-colors duration-300"
          >
            View Full Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
