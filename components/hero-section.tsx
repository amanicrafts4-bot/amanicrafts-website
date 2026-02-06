"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


const slides = [
  {
    image: "/african-woman-holding-continent.png",
    title: "Authentic African Craftsmanship, Made by Hand.",
    subtitle: "Worn With Pride.",
    description:
      "Discover handcrafted African clothing, jewelry, leather goods, natural beauty products, and timeless artifacts — ethically sourced, culturally rooted, and beautifully made.",
  },
  {
    image: "/amanicraftsslid.jpg",
    title: "Heritage You Can Feel.",
    subtitle: "Stories You Can Wear.",
    description:
      "Each piece reflects generations of artistry, culture, and identity — crafted with purpose and pride.",
  },
  {
    image: "/amanicrafts7.jpg",
    title: "Designed by Culture.",
    subtitle: "Defined by Quality.",
    description:
      "From leather goods to ceremonial artifacts, experience African excellence in every detail.",
  },
]

export function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Left strip */}
      <div className="hidden lg:flex bg-orange-950 items-center justify-center w-[22%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-primary-foreground -rotate-90 whitespace-nowrap"
        >
          <span className="text-xs tracking-[0.3em] uppercase">
            Cape Town Heritage
          </span>
        </motion.div>
      </div>

      {/* Right slider */}
      <div className="flex-1 relative">
        {/* Background slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-16 pb-24 lg:pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-background mb-6 leading-tight">
                {slide.title}
                <br />
                {slide.subtitle}
              </h1>

              <p className="text-background/80 max-w-md mb-10 text-sm sm:text-base lg:text-lg">
                {slide.description}
              </p>

              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-xs tracking-[0.2em] uppercase group"
                >
                  Explore Creations
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-[2px] w-8 transition-all ${
                i === index ? "bg-background" : "bg-background/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
