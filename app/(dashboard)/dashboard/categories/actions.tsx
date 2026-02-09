"use server"

import { prisma } from "@/lib/prisma"
import { revalidateTag } from "next/cache"

export async function createCategory(formData: FormData) {
  const name = formData.get("name")?.toString().trim()

  if (!name) {
    throw new Error("Category name is required")
  }

  const slug = name.toLowerCase().replace(/\s+/g, "-")

  await prisma.category.create({
    data: {
      name,
    },
  })

  // cache tag for categories
  revalidateTag("categories", "max")
}
