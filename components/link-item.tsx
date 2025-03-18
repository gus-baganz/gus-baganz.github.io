import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LinkItemProps {
  href: string
  text: string
  icon?: ReactNode
  className?: string
}

export function LinkItem({ href, text, icon, className }: LinkItemProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {icon && <span className="text-[#6666cc]">{icon}</span>}
      <Link
        href={href}
        className={cn(
          "relative inline-block text-[#6666cc] visited:text-[#33ff33] transition-colors duration-500",
          "hover:text-[#33ff33] hover:bg-[#222222] px-1 py-0.5",
          className,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </Link>
    </div>
  )
}

