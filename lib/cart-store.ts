'use client'

import { useState, useEffect } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

const CART_KEY = "amanicraft-cart"

// --- Helper Functions (Keep your existing logic) ---

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return []
  try {
    const cart = localStorage.getItem(CART_KEY)
    return cart ? JSON.parse(cart) : []
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
    // Trigger a window event so other components know the cart changed
    window.dispatchEvent(new Event("cart-updated"))
  } catch (error) {
    console.error("Failed to save cart:", error)
  }
}

export function addToCart(item: CartItem): CartItem[] {
  const cart = getCart()
  const existingItem = cart.find(
    (i) => i.id === item.id && i.size === item.size && i.color === item.color
  )

  if (existingItem) {
    existingItem.quantity += item.quantity
  } else {
    cart.push(item)
  }

  saveCart(cart)
  return cart
}

export function removeFromCart(id: string, size?: string, color?: string): CartItem[] {
  const cart = getCart()
  const filtered = cart.filter((item) => !(item.id === id && item.size === size && item.color === color))
  saveCart(filtered)
  return filtered
}

export function updateQuantity(id: string, quantity: number, size?: string, color?: string): CartItem[] {
  const cart = getCart()
  const item = cart.find((i) => i.id === id && i.size === size && i.color === color)
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(id, size, color)
    }
    item.quantity = quantity
  }
  saveCart(cart)
  return cart
}

export function clearCart(): void {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(CART_KEY)
    window.dispatchEvent(new Event("cart-updated"))
  } catch (error) {
    console.error("Failed to clear cart:", error)
  }
}

export function getTotalPrice(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

// --- New React Hook to sync State with LocalStorage ---

export function useCartStore() {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Initial load
    setItems(getCart())

    // Listen for updates from other parts of the app
    const handleUpdate = () => {
      setItems(getCart())
    }

    window.addEventListener("cart-updated", handleUpdate)
    return () => window.removeEventListener("cart-updated", handleUpdate)
  }, [])

  const totalAmount = getTotalPrice(items)

  return {
    items,
    totalAmount,
    refresh: () => setItems(getCart()),
    clear: clearCart
  }
}
