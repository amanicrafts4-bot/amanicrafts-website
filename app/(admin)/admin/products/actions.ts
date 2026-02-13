"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createProduct(formData: FormData) {
  const { sessionClaims } = await auth()
  if (sessionClaims?.metadata.role !== "admin") throw new Error("Unauthorized")

  const name = formData.get("name") as string
  const categoryId = formData.get("categoryId") as string
  const price = parseFloat(formData.get("price") as string)
  const quantity = parseInt(formData.get("quantity") as string)
  const description = formData.get("description") as string

  // Get all values for 'images' key
  const images = formData.getAll("images") as string[]

  await prisma.product.create({
    data: {
      name,
      description,
      price,
      quantity,
      categoryId,
      images, // We will add Cloudinary logic later
      sizes: [],
      colors: [],
    },
  })

  revalidatePath("/admin/products")
  redirect("/admin/products")
}


export async function updateProduct(id: string, formData: FormData) {
  const { sessionClaims } = await auth()
  if (sessionClaims?.metadata.role !== "admin") throw new Error("Unauthorized")

  const data = Object.fromEntries(formData)
  
  await prisma.product.update({
    where: { id },
    data: {
      name: data.name as string,
      description: data.description as string,
      price: parseFloat(data.price as string),
      categoryId: data.categoryId as string,
      quantity: parseInt(data.quantity as string),
    }
  })

  revalidatePath("/admin/products")
  redirect("/admin/products")
}


export async function deleteProduct(id: string) {
  const { sessionClaims } = await auth()
  if (sessionClaims?.metadata.role !== "admin") throw new Error("Unauthorized")

  await prisma.product.delete({ where: { id } })
  
  revalidatePath("/admin/products")
  redirect("/admin/products")
}
