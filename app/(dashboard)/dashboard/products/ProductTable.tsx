"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import ProductForm from "./ProductForm"
import { deleteProduct } from "./actions"

export default function ProductTable({ products }: any) {
  const router = useRouter()
  const [editing, setEditing] = useState(null)

  

  useEffect(() => {
    const channel = supabase
      .channel("products-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Product" },
        (payload) => {
          console.log("Product change:", payload)
          // refresh data / revalidate / setState
        }
      )
      .subscribe()

    // ✅ CLEANUP MUST NOT BE ASYNC
    return () => {
      supabase.removeChannel(channel)
    }
  }, [router])


  return (
    <div className="p-6 space-y-6">
      <ProductForm />

      <div className="space-y-3">
        {products.map((p: any) => (
          <div
            key={p.id}
            className="flex justify-between border p-4 rounded"
          >
            <div>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-muted-foreground">
                ${p.price}
              </p>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setEditing(p)}>Edit</button>
              <button
                onClick={() => deleteProduct(p.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <ProductForm product={editing} onClose={() => setEditing(null)} />
      )}
    </div>
  )
}
