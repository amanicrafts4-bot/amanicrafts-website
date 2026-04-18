import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from 'react'
import WhatsAppButton from "@/components/WhatsAppButton"
import YocoScript from "@/components/YocoScript"
import FacebookPixel from "@/components/FacebookPixel"





const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "AMANICRAFT | South African Art & Heritage",
  description: "Celebrating authentic African artisanship. Discover handcrafted treasures from Long Street, Greenmarket Square, Cape Town.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
      <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">

        {/* ✅ Clerk MUST be inside Suspense */}
        <Suspense fallback={null}>
          <ClerkProvider>
            
            {/* Optional scripts */}
            <FacebookPixel />
            <YocoScript />

            {/* App content */}
            <SmoothScrollProvider>
              {children}
            </SmoothScrollProvider>

            <Analytics />
            <WhatsAppButton />
            <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            />
</noscript>
          </ClerkProvider>
        </Suspense>

      </body>
    </html>
   
    
  )
}