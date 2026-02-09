"use server"

import { prisma } from "@/lib/prisma"
import { revalidateTag } from "next/cache"

export async function createProduct(data: {
  name: string
  description: string
  price: number
  quantity: number
  categoryId: string
  sizes?: string[]
  colors?: string[]
  images?: string[]
}) {
  if (!data.description) {
    data.description= "Unknow"
  }

  if (!data.categoryId) {
    data.categoryId= "Unknow"
  }

  await prisma.product.create({
    data: {
      name: data.name,
      description: data.description || "", // ✅ REAL STRING
      price: data.price,
      quantity: data.quantity,
      categoryId: data.categoryId, // ✅ REAL ID
      sizes: data.sizes ?? [],
      colors: data.colors ?? [],
      images: data.images ?? [],
    },
  })

  revalidateTag("products", "max")
}
export async function updateProduct(
  id: string,
  data: {
    name: string
    price: number
    quantity: number
  }
) {
  await prisma.product.update({
    where: { id },
    data,
  })

  revalidateTag("products","max")
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  })

  // ✅ ONE argument only
  revalidateTag("products", "max")
}
