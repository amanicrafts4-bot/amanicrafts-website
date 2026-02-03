"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getCart, removeFromCart, updateQuantity, getTotalPrice } from "@/lib/cart-store"
import type { CartItem } from "@/lib/cart-store"

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

export function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    if (isOpen) {
      const cart = getCart()
      setCartItems(cart)
      setSubtotal(getTotalPrice(cart))
    }
  }, [isOpen])

  const handleRemove = (id: string, size?: string, color?: string) => {
    const updated = removeFromCart(id, size, color)
    setCartItems(updated)
    setSubtotal(getTotalPrice(updated))
    // Dispatch storage event to update cart count in Navigation
    window.dispatchEvent(new StorageEvent("storage", { key: "amanicraft-cart" }))
  }

  const handleQuantityChange = (id: string, quantity: number, size?: string, color?: string) => {
    const updated = updateQuantity(id, quantity, size, color)
    setCartItems(updated)
    setSubtotal(getTotalPrice(updated))
    // Dispatch storage event to update cart count in Navigation
    window.dispatchEvent(new StorageEvent("storage", { key: "amanicraft-cart" }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/40 z-50"
          />

          {/* Cart panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 w-full sm:max-w-md bg-background z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <h2 className="font-serif text-lg sm:text-xl">Shopping Bag</h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 hover:opacity-60 transition-opacity"
                aria-label="Close cart"
              >
                <X className="h-5 w-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-sm">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${item.size}-${item.color}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 sm:gap-4 group"
                    >
                      <div className="w-20 h-24 sm:w-24 sm:h-30 bg-muted flex-shrink-0 relative overflow-hidden rounded">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          sizes="96px"
                          loading="lazy"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-serif text-xs sm:text-sm mb-1 line-clamp-2">{item.name}</h3>
                        {item.size && <p className="text-[10px] sm:text-xs text-muted-foreground">Size: {item.size}</p>}
                        {item.color && <p className="text-[10px] sm:text-xs text-muted-foreground">Color: {item.color}</p>}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.size, item.color)}
                            className="p-1 hover:opacity-60 transition-opacity"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.size, item.color)}
                            className="p-1 hover:opacity-60 transition-opacity"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => handleRemove(item.id, item.size, item.color)}
                          className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                          aria-label="Remove item"
                        >
                          Remove
                        </button>
                        <div className="text-xs sm:text-sm font-medium">${(item.price * item.quantity).toLocaleString()}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-border p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
              <Link href="/checkout" onClick={onClose} className="block">
                <Button className="w-full py-3 sm:py-6 text-xs sm:text-sm tracking-[0.2em] uppercase" disabled={cartItems.length === 0}>
                  Checkout
                </Button>
              </Link>
              <button
                onClick={onClose}
                className="w-full text-center text-xs sm:text-sm tracking-wide underline underline-offset-4 hover:no-underline transition-all"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
