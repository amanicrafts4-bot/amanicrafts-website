"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { createProduct } from "../actions"
import { CldUploadWidget } from "next-cloudinary"
import { ImagePlus, Trash2 } from "lucide-react"
import Image from "next/image"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button 
      disabled={pending}
      className="w-full bg-black text-white p-3 rounded-xl font-bold disabled:bg-gray-400 transition-all hover:bg-zinc-800"
    >
      {pending ? "Creating..." : "Create Product"}
    </button>
  )
}

export default function ProductForm({ categories }: { categories: any[] }) {
  const [images, setImages] = useState<string[]>([])

  // This handles the actual submission by appending the images to the FormData
  const clientAction = async (formData: FormData) => {
    images.forEach((url) => formData.append("images", url))
    await createProduct(formData)
  }

  return (
    <form action={clientAction} className="space-y-6 bg-white p-8 rounded-2xl border shadow-sm max-w-2xl mx-auto">
      
      {/* --- CLOUDINARY UPLOAD SECTION --- */}
      <div className="space-y-2">
        <label className="text-sm font-bold">Product Images</label>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {images.map((url) => (
            <div key={url} className="relative aspect-square rounded-xl overflow-hidden border">
              <Image fill src={url} alt="Upload" className="object-cover" />
              <button 
                type="button"
                onClick={() => setImages(images.filter(img => img !== url))}
                className="absolute top-1 right-1 p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>

        <CldUploadWidget 
          uploadPreset="amanicrafts" // Replace with your preset name from Cloudinary
          onSuccess={(result: any) => {
            setImages((prev) => [...prev, result.info.secure_url])
          }}
        >
          {({ open }) => (
            <button
              type="button"
              onClick={() => open()}
              className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-200 py-8 rounded-xl hover:bg-gray-50 transition-all text-gray-500"
            >
              <ImagePlus size={24} className="mb-2" />
              <span className="text-sm font-medium">Upload Images (Drag & Drop)</span>
            </button>
          )}
        </CldUploadWidget>
      </div>
      {/* --------------------------------- */}

      <div className="space-y-2">
        <label className="text-sm font-bold">Product Name</label>
        <input name="name" required className="w-full border p-3 rounded-lg" placeholder="Amani Silk Scarf" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Category</label>
        <select name="categoryId" required className="w-full border p-3 rounded-lg bg-white">
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold">Price (R)</label>
          <input name="price" type="number" step="0.01" required className="w-full border p-3 rounded-lg" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold">Stock Quantity</label>
          <input name="quantity" type="number" required className="w-full border p-3 rounded-lg" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold">Description</label>
        <textarea name="description" className="w-full border p-3 rounded-lg h-24" />
      </div>

      <SubmitButton />
    </form>
  )
}
