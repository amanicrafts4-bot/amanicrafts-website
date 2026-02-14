"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SizeSelector } from "@/components/size-selector"
import { ColorSelector } from "@/components/color-selector"
import { ProductDetailsAccordion } from "@/components/product-details-accordion"
import { addToCart, removeFromCart } from "@/lib/cart-store"
import { Check, Trash2 } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductPageClientProps {
  product: any
  accordionItems: Array<{
    title: string
    content: string[]
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
      image: '',
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
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>

      {/* Color Selector */}
      {product.colors.length > 0 && (
        <div className="space-y-3">
          <ColorSelector colors={product.colors} onSelect={(color) => setSelectedColor(color)} />
        </div>
      )}

      {/* Size Selector */}
     
      {/* Quantity Selector */}
     

      {/* Action Buttons */}
  

      {/* Made In */}
      <p className="text-xs text-muted-foreground text-center tracking-widest">Made in {product.madeIn}</p>

      {/* Accordion */}
      {/* <ProductDetailsAccordion items={accordionItems} /> */}
    </motion.div>
  )
}