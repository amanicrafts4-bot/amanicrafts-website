"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation" // Added for checkout redirect
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { ProductDetailsAccordion } from "@/components/product-details-accordion"
import { addToCart, removeFromCart } from "@/lib/cart-store"
import { Check, Trash2, ShoppingBag, CreditCard } from "lucide-react"

interface ProductPageClientProps {
  product: any
  accordionItems: Array<{
    title: string
    content: string | string[]
  }>
}

export function ProductPageClient({ product, accordionItems }: ProductPageClientProps) {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToBag = () => {
    if (!selectedSize && product.sizes?.length > 0) {
      alert("Please select a size")
      return
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image || '',
      quantity,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
    }
    
    addToCart(cartItem)
    
    // Trigger visual feedback
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleBuyNow = () => {
    // 1. Add to cart first
    handleAddToBag()
    // 2. Redirect to checkout page immediately
    router.push('/checkout')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="w-full lg:sticky lg:top-32 lg:self-start space-y-6 sm:space-y-8"
    >
      {/* Header */}
      <div className="space-y-2 sm:space-y-4">
        <p className="text-xs tracking-widest text-zinc-500 uppercase">
          {product.category?.name}
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight">
          {product.name}
        </h1>
        <p className="text-lg sm:text-xl font-medium">R{product.price.toLocaleString()}</p>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
        {product.description}
      </p>

      {/* Color Selector */}
      {product.colors?.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Select Color</p>
          <ColorSelector 
            colors={product.colors} 
            onSelect={(color) => setSelectedColor(color)} 
          />
        </div>
      )}

      {/* Size Selector */}
      {product.sizes?.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Select Size</p>
          <SizeSelector 
            sizes={product.sizes} 
            selectedSize={selectedSize}
            onSelect={(size) => setSelectedSize(size)} 
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={handleAddToBag}
          className="flex-1 bg-white text-black h-14 flex items-center justify-center gap-2 font-bold hover:bg-zinc-200 transition-colors rounded-none"
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              ADDED TO BAG
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              ADD TO BAG
            </>
          )}
        </button>

        <button
          onClick={handleBuyNow}
          className="flex-1 bg-zinc-800 text-white h-14 flex items-center justify-center gap-2 font-bold hover:bg-zinc-700 transition-colors rounded-none"
        >
          <CreditCard className="w-5 h-5" />
          BUY IT NOW
        </button>
      </div>

      {/* Made In */}
      <p className="text-[10px] text-zinc-500 text-center tracking-[0.2em] uppercase">
        Handcrafted in {product.madeIn || "South Africa"}
      </p>

      {/* Accordion */}
      <div className="border-t border-zinc-800 pt-4">
        <ProductDetailsAccordion items={accordionItems} />
      </div>
    </motion.div>
  )
}
