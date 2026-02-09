"use client"

import { useState, useTransition } from "react"
import { updateProduct } from "./actions"

export default function EditProductModal({
  product,
  onClose,
  onOptimisticUpdate,
}: any) {
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  })

  function submit() {
    startTransition(async () => {
      // 1️⃣ Optimistic update
      onOptimisticUpdate(product.id, form)

      // 2️⃣ Server update
      await updateProduct(product.id, form)

      // 3️⃣ Close modal
      onClose()
    })
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-background p-6 rounded-lg w-[400px] space-y-4">
        <h2 className="text-lg font-semibold">Edit product</h2>

        <input
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: Number(e.target.value) })
          }
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
        />

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose}>Cancel</button>
          <button
            disabled={isPending}
            onClick={submit}
            className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
