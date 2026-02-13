import AdminGuard from '@/components/admin-guard';
import Link from 'next/link';
import { ReactNode, Suspense } from 'react';

export default  function AdminLayout({ children }: { children: ReactNode }) {
  
  return (
    <div className="relative flex min-h-screen">
      <aside className="sticky top-0 h-screen  w-64 border-r bg-slate-50 font-medium">
        <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
        <nav className="space-y-4 flex flex-col">
          {/* Sidebar Links */}
          <Link className='rounded-full bg-amber-50 px-4 py-2 w-full' href={"/admin"}>Main Page</Link>
          <Link className='rounded-full bg-amber-50 px-4 py-2 w-full' href={"/admin/categories"}>Manage Categories</Link>
          <Link className='rounded-full bg-amber-50 px-4 py-2 w-full' href={"/admin/products"}>Manage Products</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
         {/* 2. Use Suspense to wrap the Dynamic Guard */}
        <Suspense fallback={<div className="animate-pulse">Checking access...</div>}>
          <AdminGuard>
            {children}
          </AdminGuard>
        </Suspense>
      </main>
    </div>
  );
}
