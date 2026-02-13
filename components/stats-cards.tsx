import { prisma } from "@/lib/prisma"
import { connection } from "next/server" // Import this for Next.js 16
import { Package, Tag, ShoppingCart, MessageSquare } from "lucide-react"

export default async function StatsCards() {
  // 1. Await connection() to signal this is a dynamic request
  await connection(); 
  
  // Parallel fetching for performance
  const [products, categories, orders, contacts] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.order.count(),
    prisma.contact.count(),
  ])

  const stats = [
    { name: "Total Products", value: products, icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Categories", value: categories, icon: Tag, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Active Orders", value: orders, icon: ShoppingCart, color: "text-green-600", bg: "bg-green-50" },
    { name: "New Messages", value: contacts, icon: MessageSquare, color: "text-amber-600", bg: "bg-amber-50" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4">
          <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
            <stat.icon size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{stat.name}</p>
            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
