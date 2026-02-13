import { prisma } from "@/lib/prisma";

export async function getPublicProducts() {
  "use cache"; // Next.js 16 Edge Caching
  
  return await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });
}
