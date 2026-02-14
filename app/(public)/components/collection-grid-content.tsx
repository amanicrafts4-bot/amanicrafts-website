import { prisma } from "@/lib/prisma"
import { connection } from "next/server"
import { ProductCard } from "./product-card"

export default async function CollectionGridContent() {
  await connection(); // Required for Next.js 16 Dynamic IO
  
  const products = await prisma.product.findMany({
    take: 6,
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  });

  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Slot 1 - lg:pt-12 */}
      {products[0] && <div className="lg:pt-12"><ProductCard {...products[0]} index={0} /></div>}
      
      {/* Slot 2 */}
      {products[1] && <div><ProductCard {...products[1]} index={1} /></div>}
      
      {/* Slot 3 - lg:pt-24 */}
      {products[2] && <div className="lg:pt-24"><ProductCard {...products[2]} index={2} /></div>}
      
      {/* Slot 4 */}
      {products[3] && <div><ProductCard {...products[3]} index={3} /></div>}
      
      {/* Slot 5 - lg:pt-16 */}
      {products[4] && <div className="lg:pt-16"><ProductCard {...products[4]} index={4} /></div>}
      
      {/* Slot 6 - lg:-mt-8 */}
      {products[5] && <div className="lg:-mt-8"><ProductCard {...products[5]} index={5} /></div>}
    </div>
  );
}
