'use client'

import Script from "next/script"

export default function YocoScript() {
  return (
    <Script 
      src="https://js.yoco.com/sdk/v1/yoco-sdk-web.js" 
      strategy="afterInteractive"
      onLoad={() => console.log("Yoco SDK loaded")}
      onError={() => console.error("Yoco SDK failed to load - check ad-blockers")}
    />
  )
}
