import React from "react"
import { Cat } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  canBuy: boolean
  cost: number
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, canBuy, cost, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto overflow-hidden rounded-2xl border bg-background p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div
          className={
            canBuy
              ? "h-2 w-2 rounded-2xl bg-green-300 transition-all duration-300 group-hover:scale-[100.8]"
              : "h-2 w-2 rounded-2xl bg-red-500 transition-all duration-300 group-hover:scale-[100.8]"
          }
        ></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{canBuy ? `Buy for ${cost}}` : `You need ${cost}`}</span>
        <Cat />
      </div>
    </button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"
