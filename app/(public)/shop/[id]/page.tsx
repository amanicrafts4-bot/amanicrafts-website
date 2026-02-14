// app/shop/[id]/page.tsx
// REMOVE 'use client' FROM HERE

import { prisma } from "@/lib/prisma";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
// Import your client components
import { ProductInfoWrapper } from "./ProductInfoWrapper"; 

export default async function ShopItemPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Breadcrumb - Static/Server Side is fine */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/shop?category=${product.category.id}`} className="hover:text-white transition-colors">
            {product.category.name}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{product.name}</span>
        </nav>
      </div>
      
      {/* Pass data to the Client Wrapper for Framer Motion and Interactivity */}
      <ProductInfoWrapper product={product} />
    </main>
  );
}
