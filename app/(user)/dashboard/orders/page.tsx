import { Suspense } from "react"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { connection } from "next/server"

async function OrdersList() {
  await connection() // Mandatory for Next.js 16 Dynamic IO
  const { userId } = await auth()
  
  const orders = await prisma.order.findMany({
    where: { id: userId as string }, // Adjust based on your schema's user field
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="grid gap-4">
      {orders.length === 0 ? (
        <p className="text-muted-foreground">No orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="p-4 border rounded-xl bg-white shadow-sm">
             Order #{order.id.slice(0, 8)} - R{order.total}
          </div>
        ))
      )}
    </div>
  )
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<div className="h-40 w-full bg-slate-100 animate-pulse rounded-xl" />}>
      <OrdersList />
    </Suspense>
  )
}
