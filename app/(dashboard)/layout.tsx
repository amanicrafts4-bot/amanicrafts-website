import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white grid grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside className="border-r border-neutral-800 p-6">
        <h1 className="text-xl font-semibold tracking-wide">Amanicrafts</h1>
        <nav className="mt-8 space-y-4 text-sm">
          <a href="/dashboard/products">Products</a>
          <a href="/dashboard/categories">Categories</a>
          <a href="/dashboard/orders">Orders</a>
          <a href="/dashboard/contacts">Messages</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="p-8">{children}</main>
    </div>
  )
}
