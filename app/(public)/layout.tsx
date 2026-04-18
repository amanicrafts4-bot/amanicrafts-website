import FacebookPixel from "@/components/FacebookPixel";
import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <FacebookPixel />
      <Navigation />
      <div>{children}</div>
      <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=936390609102775&ev=PageView&noscript=1"
              />
            </noscript>
    </div>
  )
}
