import { prisma } from "@/lib/prisma"
import { connection } from "next/server"
import { ProductCard } from "./product-card"

export default async function CollectionGridContent() {
  await connection(); // Next.js 16 Dynamic IO signal
  
  const featuredProducts = await prisma.product.findMany({
    take: 6, // Limit to 6 for the featured section
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:pt-12"><ProductCard {...featuredProducts[0]} index={0} /></div>
      <div><ProductCard {...featuredProducts[1]} index={1} /></div>
      <div className="lg:pt-24"><ProductCard {...featuredProducts[2]} index={2} /></div>
      <div><ProductCard {...featuredProducts[3]} index={3} /></div>
      <div className="lg:pt-16"><ProductCard {...featuredProducts[4]} index={4} /></div>
      <div className="lg:-mt-8"><ProductCard {...featuredProducts[5]} index={5} /></div>
    </div>
  )
}
