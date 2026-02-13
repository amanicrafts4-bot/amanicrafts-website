import { prisma } from "@/lib/prisma"
import { connection } from "next/server"
import { Suspense } from "react"
import CloudinaryImage from "@/components/public/cloudinary-image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Params = Promise<{ id: string }>

// 1. DATA FETCHER COMPONENT
async function ProductDetails({ id }: { id: string }) {
  await connection() // Mandatory for Next.js 16 Dynamic IO
  
  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true }
  })

  if (!product) return <div className="p-20 text-center">Product not found</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      {/* Image Gallery */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted rounded-2xl">
        <CloudinaryImage
          src={product.images[0] || "placeholder"}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {product.category.name}
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl tracking-tight">{product.name}</h1>
          <p className="text-2xl mt-4 font-medium">R{product.price.toLocaleString()}</p>
        </div>

        <div className="prose prose-slate">
          <p className="text-slate-600 leading-relaxed">{product.description}</p>
        </div>

        <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-zinc-800 transition-all active:scale-[0.98]">
          Add to Bag
        </button>
      </div>
    </div>
  )
}

// 2. STATIC PAGE SHELL (Default Export)
export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-black mb-12 transition-colors">
        <ArrowLeft size={16} /> Back to Collection
      </Link>

      {/* Wrap the dynamic content in Suspense */}
      <Suspense fallback={<div className="h-[600px] w-full bg-slate-100 animate-pulse rounded-3xl" />}>
        <ProductDetails id={id} />
      </Suspense>
    </main>
  )
}
