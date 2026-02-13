import { Navigation } from "@/components/navigation";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navigation />
      <div>{children}</div>
    </div>
  )
}
