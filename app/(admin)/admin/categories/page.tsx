import { prisma } from "@/lib/prisma";
import DeleteCategoryButton from "./delete-button";
import { createCategory } from "@/app/(admin)/admin/categories/actions";
import { Trash2, Plus } from "lucide-react";
import { connection } from "next/server";
// 
export default async function AdminCategoriesPage() {
  
  // 2. Call this to satisfy the "new Date()" requirement
  await connection(); 
  const categories = await prisma.category.findMany({
  // No 'select' here means it fetches ALL fields including 'slug'
  include: { 
    _count: { 
      select: { products: true } 
    } 
  },
  orderBy: { name: 'asc' }
});

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black">Manage Categories</h1>
      </div>

      {/* Quick Add Category Form */}
      <form action={createCategory} className="bg-white p-6 rounded-2xl border shadow-sm flex gap-4 mb-10">
        <div className="flex-1">
          <input 
            name="name" 
            placeholder="Category Name (e.g. Home Decor)" 
            required 
            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-black outline-none" 
          />
        </div>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all">
          <Plus size={18} /> Add
        </button>
      </form>

      {/* Categories List */}
      <div className="grid gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white p-5 rounded-xl border flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">{cat.name}</h3>
              {/* <p className="text-xs text-gray-400 uppercase">Slug: {cat.slug }</p> */}
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full font-medium">
                {cat._count.products} Products
              </span>
              <DeleteCategoryButton id={cat.id} name={cat.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
