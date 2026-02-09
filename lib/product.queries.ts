import { prisma } from "./prisma"
import { unstable_cache } from "next/cache"

export const getProducts = unstable_cache(
  async () => {
    return prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "createdAt" in prisma.product ? "desc" : undefined },
    })
  },
  ["products"],
  {
    tags: ["products"], // 👈 REQUIRED
  }
)

export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
  })
}
