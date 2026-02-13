
import { Suspense } from "react"
import StatsCards from "@/components/stats-cards"
import Link from "next/link"
import { Plus, ArrowRight } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Admin Overview</h1>
          <p className="text-slate-500">Welcome back! Here is what's happening with Amani Crafts.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/products/new" className="bg-black text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-800 transition-all text-sm">
            <Plus size={18} /> New Product
          </Link>
        </div>
      </div>

      {/* Streaming Stats Section */}
      <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-pulse">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-24 bg-gray-100 rounded-2xl" />)}
      </div>}>
        <StatsCards />
      </Suspense>

      {/* Quick Actions / Recent Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="font-bold text-xl mb-4">Quick Links</h2>
          <div className="space-y-3">
            <Link href="/admin/categories" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl border transition-colors group">
              <span className="font-semibold">Manage Categories</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/admin/products" className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl border transition-colors group">
              <span className="font-semibold">Inventory List</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Public Store</h2>
          <p className="text-slate-400 text-sm mb-6">Preview how your products look to customers on the live site.</p>
          <Link href="/shop" className="bg-white text-black w-fit px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
            View Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
