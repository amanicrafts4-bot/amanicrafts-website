"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import CloudinaryImage from "@/components/public/cloudinary-image"

// 1. THIS INTERFACE MUST MATCH YOUR PRISMA DATA EXACTLY
interface ProductCardProps {
  id: string
  name: string
  price: number
  images: string[] // Changed from 'image' to 'images' (Prisma Array)
  category: {
    name: string
  }
  index: number
}

export function ProductCard({ id, name, price, images, category, index }: ProductCardProps) {
  // 2. Safety logic to handle the array from Supabase
  const primaryImage = (images && images.length > 0) ? images[0] : "placeholder_id";
  const hoverImage = (images && images.length > 1) ? images[1] : primaryImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/shop/${id}`} className="group block text-center">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-6 rounded-sm">
          <CloudinaryImage
            src={primaryImage}
            alt={name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <CloudinaryImage
            src={hoverImage}
            alt={`${name} hover`}
            fill
            className="object-cover absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">
            {category?.name || "Handcrafted"}
          </p>
          <h3 className="font-serif text-xl group-hover:underline underline-offset-4 transition-all uppercase tracking-tighter">
            {name}
          </h3>
          <p className="text-sm font-medium text-slate-600">
            R{price?.toLocaleString() || "0.00"}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
