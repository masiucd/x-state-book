import Link from "next/link"
import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

interface Props {
  className?: string
  bodyStyles?: string
  children?: ReactNode
}

export default function MainHeader({className, bodyStyles, children}: Props) {
  return (
    <header
      className={cn(
        "sticky top-0 min-h-[3rem] max-h-[10rem] flex items-center bg-white shadow dark:bg-slate-900",
        className
      )}
    >
      <div className={cn("px-2 sm:px-10 flex items-center flex-1", bodyStyles)}>
        <div>
          <Link href="/">
            <span>X state book</span>
          </Link>
        </div>
        {children && children}
      </div>
    </header>
  )
}
