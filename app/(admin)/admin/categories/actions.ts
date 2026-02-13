"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role !== "admin") throw new Error("Unauthorized");

  const name = formData.get("name") as string;

  // Auto-generate a URL-friendly slug (e.g., "Silk Scarf" -> "silk-scarf")
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  await prisma.category.create({ data: { name, slug } });

  revalidatePath("/admin/categories");
}

export async function deleteCategory(id: string) {
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata.role !== "admin") throw new Error("Unauthorized");

  // 1. Check if category has products
  const category = await prisma.category.findUnique({
    where: { id },
    include: { _count: { select: { products: true } } },
  });

  if (category?._count.products && category._count.products > 0) {
    throw new Error("Cannot delete category with active products");
  }

  // 2. Perform deletion
  await prisma.category.delete({ where: { id } });

  revalidatePath("/admin/categories");
}
