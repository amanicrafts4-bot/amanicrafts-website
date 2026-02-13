import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus, Edit, Package } from "lucide-react"
import { connection } from "next/server"
import { Suspense } from "react"
import { ProductRowSkeleton, Shimmer } from "@/components/admin/shimmer"

// 1. Data Component: This handles the dynamic database fetch
async function ProductList() {
  await connection(); 
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <tbody className="divide-y">
      {products.map((product) => (
        <tr key={product.id} className="hover:bg-slate-50 transition-colors">
          <td className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 p-2 rounded-lg">
                <Package size={16} className="text-slate-400" />
              </div>
              <span className="font-bold text-slate-900">{product.name}</span>
            </div>
          </td>
          <td className="p-4">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {product.category.name}
            </span>
          </td>
          <td className="p-4 font-medium text-slate-700">R{product.price.toFixed(2)}</td>
          <td className="p-4 text-right">
            <div className="flex justify-end gap-2">
              <Link href={`/admin/products/${product.id}`} className="p-2 hover:bg-white rounded-lg border">
                <Edit size={16} />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

// 2. Main Page: Acts as the Static Shell
export default function AdminProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight">Inventory</h1>
        <Link href="/admin/products/new" className="bg-black text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-zinc-800 transition-all text-sm font-bold">
          <Plus size={18} /> Add Product
        </Link>
      </div>

      <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="p-4 font-bold text-sm text-slate-500 uppercase">Product</th>
                <th className="p-4 font-bold text-sm text-slate-500 uppercase">Category</th>
                <th className="p-4 font-bold text-sm text-slate-500 uppercase">Price</th>
                <th className="p-4 font-bold text-sm text-slate-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            
            {/* 3. Wrap the dynamic body in Suspense with our new skeletons */}
            <Suspense fallback={
              <tbody className="divide-y">
                {[...Array(5)].map((_, i) => <ProductRowSkeleton key={i} />)}
              </tbody>
            }>
              <ProductList />
            </Suspense>
          </table>
        </div>
      </div>
    </div>
  )
}
