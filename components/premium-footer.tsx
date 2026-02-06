"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function PremiumFooter() {
  const footerLinks = {
    shop: [
      { label: "Featured Creations", href: "/shop" },
      { label: "Jewelry & Beadwork", href: "/shop?category=Jewelry" },
      { label: "Textiles", href: "/shop?category=Textiles" },
      { label: "Art & Decor", href: "/shop?category=Art" },
      { label: "Artisan Stories", href: "/heritage" },
    ],
    about: [
      { label: "Our Heritage", href: "/heritage" },
      { label: "Artisan Communities", href: "/heritages" },
      { label: "Fair Trade Practices", href: "/heritage" },
      { label: "About Amanicraft", href: "/heritage" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Care Instructions", href: "/care" },
      { label: "Customization", href: "/contact" },
    ],
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-serif text-xl mb-4">Artisan Updates</h3>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              Subscribe for new artisan collaborations, heritage stories, and exclusive releases celebrating South African culture.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-0 border-b border-background/30 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:border-background transition-colors"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Shop links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, idx) => (
                <li key={link.href}>
                  <Link href={link.href + idx} className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, idx) => (
                <li key={link.href + idx}>
                  <Link href={link.href } className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={link.href + idx + "support"}>
                  <Link href={link.href} className="text-sm text-background/80 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-serif text-lg tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
              Amanicraft
            </Link>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/amanicraft" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                <Instagram className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="https://facebook.com/amanicraft" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
                <Facebook className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="https://twitter.com/amanicraft" className="hover:opacity-60 transition-opacity" aria-label="Twitter">
                <Twitter className="h-4 w-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-background/50">
            <Link href="/privacy" className="hover:text-background/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background/80 transition-colors">
              Terms of Service
            </Link>
            <span>© 2026 Amanicraft. Celebrating South African Heritage.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
