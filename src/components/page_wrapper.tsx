import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

interface Props {
  children: ReactNode
  className?: string
  fluid?: boolean
}

function PageWrapper({children, className, fluid = false}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col flex-1",
        fluid ? "max-w-none" : "max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export {PageWrapper}
