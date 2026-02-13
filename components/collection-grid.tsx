"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"

const products = [
  {
    id: "Ceramic Elephant Cup",
    name: "Traditional African cup of an elephant.",
    price: 500,
    image: "/shop/ceramic_mug_2.jpeg",
    hoverImage:"/shop/ceramic_mug_1.jpeg",
    category: "Jewelry",
  },
  {
    id: "wo",
    name: "Cape Town Enamel Mugs",
    price: 250,
    image: "/shop/cape-town-mug-1.jpeg",
    hoverImage: "/shop/cape-town-mug-2.jpeg",
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
