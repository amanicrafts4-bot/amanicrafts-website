"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { ProductDetailsAccordion } from "@/components/product-details-accordion"
import { addToCart, removeFromCart } from "@/lib/cart-store"
import { Check, Trash2 } from "lucide-react"
import { PrismaProduct } from "@/types/product"

interface ProductPageClientProps {
  product: PrismaProduct
  accordionItems: Array<{
    title: string
    content: string[] // Ensure this is strictly string[]
  }>
}



export function ProductPageClient({ product, accordionItems }: ProductPageClientProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const [isAdded, setIsAdded] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)

  const handleAddToBag = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert("Please select a size")
      return
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/placeholder.svg", // Prisma uses an array
      quantity,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
    }
    
    addToCart(cartItem)
    
    // Dispatch storage event to update cart count in Navigation
    window.dispatchEvent(new StorageEvent("storage", { key: "amanicraft-cart" }))

    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleRemoveFromCart = () => {
    setIsRemoving(true)
    removeFromCart(product.id, selectedSize || undefined, selectedColor || undefined)
    
    // Dispatch storage event to update cart count in Navigation
    window.dispatchEvent(new StorageEvent("storage", { key: "amanicraft-cart" }))
    
    setTimeout(() => setIsRemoving(false), 600)
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
        <p className="text-xs tracking-widest text-muted-foreground uppercase">{product.category.name}</p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight">{product.name}</h1>
        <p className="text-lg sm:text-xl font-medium">R{product.price.toLocaleString()}</p>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.longDescription}</p>

      {/* Color Selector */}
      {product.colors.length > 0 && (
        <div className="space-y-3">
          {/* <ColorSelector colors={product.colors} onSelect={(color) => setSelectedColor(color)} /> */}
        </div>
      )}

      {/* Size Selector */}
      {product.sizes.length > 0 && (
        <div className="space-y-3">
          {/* <SizeSelector sizes={product.sizes} onSelect={(size) => setSelectedSize(size)} /> */}
        </div>
      )}

      {/* Quantity Selector */}
      <div className="space-y-2">
        <label className="text-xs tracking-widest text-muted-foreground uppercase block">Quantity</label>
        <div className="flex items-center gap-2 sm:gap-4 border border-border rounded px-3 sm:px-4 py-2 sm:py-3 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-sm sm:text-base hover:opacity-60 transition-opacity p-1"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-6 sm:w-8 text-center text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-sm sm:text-base hover:opacity-60 transition-opacity p-1"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 sm:space-y-3">
        {/* Add to Bag */}
        <motion.button
          onClick={handleAddToBag}
          className={`w-full py-3 sm:py-4 text-xs sm:text-sm tracking-widest uppercase font-medium transition-all flex items-center justify-center gap-2 rounded ${
            isAdded
              ? "bg-green-600 text-white"
              : "bg-foreground text-background hover:bg-foreground/90"
          }`}
          whileTap={{ scale: 0.98 }}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Added to Cart</span>
              <span className="sm:hidden">Added</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add Cart</span>
            </>
          )}
        </motion.button>

        {/* Remove from Cart */}
        <motion.button
          onClick={handleRemoveFromCart}
          className={`w-full py-2 sm:py-3 text-xs sm:text-sm tracking-widest uppercase font-medium border border-border transition-all flex items-center justify-center gap-2 rounded ${
            isRemoving
              ? "bg-red-100 text-red-700 border-red-300"
              : "hover:bg-muted text-foreground"
          }`}
          whileTap={{ scale: 0.98 }}
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline">Remove from Cart</span>
          <span className="sm:hidden">Remove</span>
        </motion.button>
      </div>

      {/* Made In */}
      <p className="text-xs text-muted-foreground text-center tracking-widest">Made in {product.madeIn}</p>

      {/* Accordion */}
      <ProductDetailsAccordion items={accordionItems} />
    </motion.div>
  )
}
