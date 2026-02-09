"use client"

import {
  useEffect,
  useOptimistic,
  useTransition,
  useState,
} from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import EditProductModal from "./EditProductModal"
import ProductForm from "./ProductForm"
import { deleteProduct } from "./actions"

type Action =
  | { type: "delete"; id: string }
  | { type: "update"; id: string; data: Partial<Product> }

type Product = {
  id: string
  name: string
  price: number
  quantity: number
}

export default function ProductTable({ products }: { products: Product[] }) {
  const router = useRouter()
  const [editing, setEditing] = useState<Product | null>(null)
  const [isPending, startTransition] = useTransition()

  const [optimisticProducts, mutateOptimistic] =
    useOptimistic<Product[], Action>(products, (state, action) => {
      switch (action.type) {
        case "delete":
          return state.filter(p => p.id !== action.id)

        case "update":
          return state.map(p =>
            p.id === action.id ? { ...p, ...action.data } : p
          )

        default:
          return state
      }
    })

  function handleDelete(id: string) {
    startTransition(async () => {
      mutateOptimistic({ type: "delete", id })
      await deleteProduct(id)
    })
  }

  function handleOptimisticEdit(id: string, data: Partial<Product>) {
    mutateOptimistic({ type: "update", id, data })
  }

  useEffect(() => {
    const channel = supabase
      .channel("products-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Product" },
        () => router.refresh()
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [router])

  return (
    <div className="p-6 space-y-6 bg-red-300">
      <ProductForm />

      {optimisticProducts.map(p => (
        <div key={p.id} className="flex justify-between border p-4 rounded">
          <div>
            <p className="font-medium">{p.name}</p>
            <p className="text-sm text-muted-foreground">
              ${p.price} · Qty {p.quantity}
            </p>
          </div>

          <div className="flex gap-3">
            <button onClick={() => setEditing(p)}>Edit</button>
            <button
              onClick={() => handleDelete(p.id)}
              disabled={isPending}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {editing && (
        <EditProductModal
          product={editing}
          onClose={() => setEditing(null)}
          onOptimisticUpdate={handleOptimisticEdit}
        />
      )}
    </div>
  )
}
