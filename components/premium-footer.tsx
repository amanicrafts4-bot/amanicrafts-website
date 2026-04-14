"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { EmailAddress } from "@clerk/nextjs/server"

export function PremiumFooter() {
  const footerLinks = {
    shop: [
      { label: "Shop", href: "/shop" },
      { label: "Home", href: "/" },
      { label: "Our Heritage", href: "/heritage" },
   
    ],
    EmailAddresses: [
       { label: "grace@amanicrafts.com", href: "mailto:grace@amanicrafts.com" },
      { label: "amanicrafts4@gmail.com", href: "mailto:amanicrafts4@gmail.com4" },
    ],
    Contacts: [
      { label: "+27 63 276 8141", href: "tel:+27632768141" },
      { label: "+27 73 738 4619", href: "tel:+27737384619" },
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
            <h3 className="font-serif text-xl mb-4">Amanicrafts.com</h3>
            <p className="text-background/60 text-sm mb-6 leading-relaxed">
              Greenmarket bay 24 long Market, Cape Town , South Africa 8000
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
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Email Addresses</h4>
            <ul className="space-y-3">
              {footerLinks.EmailAddresses.map((link, idx) => (
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
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/60">Contacts</h4>
            <ul className="space-y-3">
              {footerLinks.Contacts.map((link, idx) => (
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
