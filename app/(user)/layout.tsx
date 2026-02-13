// src/app/(user)/dashboard/orders/layout.tsx
import { ReactNode } from "react"

// Ensure you have 'export default' and it returns JSX
export default function OrdersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Your Orders</h1>
        <p className="text-sm text-muted-foreground">Manage and track your recent purchases.</p>
      </header>
      <div className="min-h-[400px]">
        {children}
      </div>
    </div>
  )
}
