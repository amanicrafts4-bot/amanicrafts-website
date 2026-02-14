import { notFound } from "next/navigation"
import { Suspense } from "react"
import { connection } from "next/server"
import { prisma } from "@/lib/prisma"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { RelatedProducts } from "@/components/related-products"
import { ProductPageContent } from "./product-page-content" // New sub-component

type Params = Promise<{ id: string }>




export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;


  

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Wrap the dynamic fetch in Suspense for Next.js 16 PPR */}
      <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center animate-pulse text-muted-foreground italic">Loading heritage piece...</div>}>
        <ProductDataFetcher id={id} />
      </Suspense>

      <PremiumFooter />
    </main>
  )
}

async function ProductDataFetcher({ id }: { id: string }) {
  await connection(); // Required for Next.js 16 Dynamic IO

  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true }
  });

  if (!product) notFound();

  // Fetch real related products from Supabase
  const relatedProducts = await prisma.product.findMany({
    where: { 
      categoryId: product.categoryId,
      NOT: { id: product.id }
    },
    take: 4,
    include: { category: true }
  });

  // Map your Prisma model to the Accordion UI expectations
  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Heritage Details", content: product.longDescription || "Crafted with traditional techniques." },
    { title: "Origin", content: `Proudly made in ${product.madeIn || 'South Africa'}` },
    { title: "Shipping & Returns", content: ["Complimentary shipping", "Free returns within 30 days"] },
  ];

  return (
    <>
      <ProductPageContent 
        product={product} 
        accordionItems={accordionItems} 
      />
     {/* <RelatedProducts products={relatedProducts as any} /> */}
    </>
  );
}
