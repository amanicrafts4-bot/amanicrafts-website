"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  hoverImage: string
  category: string
  index: number
}

export function ProductCard({ id, name, price, image, hoverImage, category, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/product/${id}`}
        className="group block h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="relative aspect-[3/4] overflow-hidden bg-muted mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Primary image */}
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Secondary hover image */}
          <Image
            src={hoverImage || "/placeholder.svg"}
            alt={`${name} alternate view`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Hover shadow overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        <motion.div
          className="space-y-1"
          initial={false}
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">{category}</p>
          <h3 className="font-serif text-lg group-hover:text-primary transition-colors duration-300">{name}</h3>
          <p className="text-sm text-muted-foreground tracking-wide">Starting at R{price.toLocaleString()}</p>
        </motion.div>
      </Link>
    </motion.div>
  )
}
