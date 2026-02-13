import { prisma } from "@/lib/prisma"
import ProductForm from "./product-form"
import { connection } from "next/server" // 1. Add this import

export default async function NewProductPage() {
    // 2. Call this to satisfy the "new Date()" requirement
    await connection(); 

  // Fetch existing categories so admin can select one
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-black mb-8">Add New Product</h1>
      <ProductForm categories={categories} />
    </div>
  )
}
