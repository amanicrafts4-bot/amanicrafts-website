"use client";

import { useState } from "react";
import { deleteCategory } from "./actions";
import { Trash2, AlertTriangle, X } from "lucide-react";

export default function DeleteCategoryButton({ id, name }: { id: string, name: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    setIsPending(true);
    try {
      await deleteCategory(id);
      setIsOpen(false);
    } catch (err) {
      alert("Error: " + (err as Error).message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
      >
        <Trash2 size={18} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center gap-3 text-amber-600 mb-4">
              <AlertTriangle size={24} />
              <h3 className="text-lg font-bold">Delete Category?</h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to delete <span className="font-bold text-black">"{name}"</span>? This action cannot be undone.
            </p>

            <div className="flex gap-3">
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 border rounded-xl font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                disabled={isPending}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 disabled:bg-red-300"
              >
                {isPending ? "Deleting..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
