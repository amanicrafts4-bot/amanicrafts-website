import { unstable_cache } from "next/cache"
import { prisma } from "@/lib/prisma"

export const getProducts = unstable_cache(
  async () => prisma.product.findMany(),
  ["products"],
  {
    tags: ["products"],
  }
)
