"use server"

import { prisma } from "@/lib/prisma"
import { revalidateTag } from "next/cache"

export async function createProduct(data: any) {
  await prisma.product.create({ data })
  revalidateTag("products", "max")
}

export async function updateProduct(id: string, data: any) {
  await prisma.product.update({
    where: { id },
    data,
  })
  revalidateTag("products", "max")
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id },
  })
  revalidateTag("products", "max")
}
