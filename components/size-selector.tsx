"use client"

import { useState } from "react"

interface Size {
  size: string
  available: boolean
}

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string // Add this line
  onSelect: (size: string) => void
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`h-12 min-w-[3rem] px-4 border text-sm font-medium transition-all ${
            selectedSize === size 
              ? "border-white bg-white text-black" 
              : "border-zinc-800 text-zinc-400 hover:border-zinc-500"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  )
}

