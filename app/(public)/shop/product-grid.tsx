import { prisma } from "@/lib/prisma"
import { connection } from "next/server"
import CloudinaryImage from "@/components/public/cloudinary-image" // Import your wrapper
import Link from "next/link"

export default async function ProductGrid() {
  await connection() 
  
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
      {products.map((product) => (
        <Link key={product.id} href={`/shop/${product.id}`} className="group block">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4 rounded-sm">
            {/* Use the Wrapper instead of direct CldImage */}
            <CloudinaryImage
              src={product.images[0] || "placeholder"}
              alt={product.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              crop="fill"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              {product.category.name}
            </p>
            <h3 className="font-serif text-lg group-hover:underline underline-offset-4 transition-all">
              {product.name}
            </h3>
            <p className="text-sm font-medium">R{product.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
