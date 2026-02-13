"use client"

import { useState } from "react"
import { deleteProduct } from "../actions"
import { Trash2, AlertTriangle } from "lucide-react"

export default function DeleteProductDialog({ id, name }: { id: string, name: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-colors"
      >
        <Trash2 size={18} /> Delete Product
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-100 p-4 rounded-full text-red-600 mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-black mb-2">Are you sure?</h3>
              <p className="text-slate-500 mb-8">You are about to delete <span className="font-bold text-slate-900">"{name}"</span>. This cannot be undone.</p>
              
              <div className="flex w-full gap-3">
                <button onClick={() => setIsOpen(false)} className="flex-1 py-3 font-bold border rounded-xl hover:bg-slate-50">Cancel</button>
                <form action={() => deleteProduct(id)} className="flex-1">
                  <button className="w-full py-3 font-bold bg-red-600 text-white rounded-xl hover:bg-red-700">Delete</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
