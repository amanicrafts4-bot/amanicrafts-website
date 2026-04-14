"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { MiniCart } from "./mini-cart"
import { useCartStore } from "@/lib/cart-store" // ✅ FIXED
import ClerNavHandler from "./ClerkNavHandler"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const pathname = usePathname()

  // ✅ ✅ REAL-TIME CART (THE FIX)
  const { items } = useCartStore()

  const cartCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/heritage", label: "Heritage" },
  ]

  const navItemColor = isScrolled ? "text-foreground" : "text-white"
  const navItemHoverColor = isScrolled
    ? "text-foreground/60 hover:text-foreground"
    : "text-white/70 hover:text-white"

  const iconColor = isScrolled ? "text-foreground" : "text-white"

  return (
    <>
      {/* 🔝 NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">

            {/* 🍔 Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 -ml-2 ${iconColor}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* 🧭 Desktop Nav */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-[0.2em] uppercase ${
                    pathname === link.href ? navItemColor : navItemHoverColor
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 🧵 Logo */}
            <Link
              href="/"
              className={`absolute left-1/2 -translate-x-1/2 font-serif text-md lg:text-xl tracking-[0.3em] uppercase ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Amanicrafts
            </Link>

            {/* 🛒 Right Side */}
            <div className="flex items-center gap-2 lg:gap-4">

              <div className="hidden md:block">
                <ClerNavHandler />
              </div>

              {/* 🛍 Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 -mr-2 relative ${iconColor}`}
              >
                <ShoppingBag className="h-5 w-5" />

                {cartCount > 0 && (
                  <motion.span
                    key={cartCount} // 🔥 animation trigger
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-1 -right-1 h-5 w-5 text-[10px] font-bold flex items-center justify-center rounded-full bg-primary text-primary-foreground"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-y-0 left-0 w-[280px] z-50 bg-background border-r"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b">
                <span className="font-serif uppercase">Menu</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-6">
                  <ClerNavHandler />
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 🛒 Mini Cart */}
      <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}