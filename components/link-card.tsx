import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface LinkCardProps {
  href: string
  title: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function LinkCard({ href, title, description, icon, className }: LinkCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn("block no-underline", className)}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-accent/50 dark:hover:bg-accent/20">
        <div className="p-4 flex items-center gap-4">
          {icon && <div className="flex-shrink-0 text-primary">{icon}</div>}
          <div className="flex-grow">
            <h2 className="font-medium">{title}</h2>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          <div className="flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Card>
    </a>
  )
}

