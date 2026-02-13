import { prisma } from "@/lib/prisma"
import { connection } from "next/server"
import { updateProduct } from "../actions"
import DeleteProductDialog from "./delete-dialog"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Params = Promise<{ id: string }>

export default async function EditProductPage({ params }: { params: Params }) {
  await connection()
  const { id } = await params

  const [product, categories] = await Promise.all([
    prisma.product.findUnique({ where: { id }, include: { category: true } }),
    prisma.category.findMany({ orderBy: { name: 'asc' } })
  ])

  if (!product) return <div className="p-10 text-center">Product not found</div>

  const updateWithId = updateProduct.bind(null, id)

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <Link href="/admin/products" className="flex items-center gap-2 text-slate-500 hover:text-black transition-colors font-medium">
        <ArrowLeft size={18} /> Back to Inventory
      </Link>

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight">Edit Product</h1>
        <DeleteProductDialog id={product.id} name={product.name} />
      </div>

      <form action={updateWithId} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl border shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1 text-slate-700">Name</label>
            <input name="name" defaultValue={product.name} required className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1 text-slate-700">Category</label>
            <select name="categoryId" defaultValue={product.categoryId} required className="w-full border p-3 rounded-xl bg-white outline-none">
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-1 text-slate-700">Price ($)</label>
              <input name="price" type="number" step="0.01" defaultValue={product.price} required className="w-full border p-3 rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 text-slate-700">Stock</label>
              <input name="quantity" type="number" defaultValue={product.quantity} required className="w-full border p-3 rounded-xl" />
            </div>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <label className="block text-sm font-bold mb-1 text-slate-700">Description</label>
            <textarea name="description" defaultValue={product.description || ""} className="w-full border p-3 rounded-xl h-44 outline-none" />
          </div>
          <button type="submit" className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-zinc-800 shadow-xl transition-all active:scale-95">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
