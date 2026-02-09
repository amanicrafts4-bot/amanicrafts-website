"use client"

import { useState, startTransition } from "react"
import { createProduct, updateProduct } from "./actions"

export default function ProductForm({ product, onClose }: any) {
  const [form, setForm] = useState(
    product || {
      name: "",
      price: 0,
      quantity: 0,
      sizes: [],
      colors: [],
      images: [],
      categoryId: "",
    }
  )

  function submit() {
    startTransition(async () => {
      if (product) {
        await updateProduct(product.id, form)
        onClose?.()
      } else {
        await createProduct(form)
      }
    })
  }

  return (
    <div className="border p-4 rounded space-y-3">
      <input
        placeholder="Name"
        className="bg-black"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="number"
        placeholder="Price"
        className="bg-black"
        value={form.price}
        onChange={e => setForm({ ...form, price: +e.target.value })}
      />

      <input
        type="number"
        placeholder="Quantity"
        className="bg-black"
        value={form.quantity}
        onChange={e => setForm({ ...form, quantity: +e.target.value })}
      />

      <button 
      className="bg-green-500"
        onClick={submit}>
        
        {product ? "Update" : "Create"} Product
      </button>
    </div>
  )
}
