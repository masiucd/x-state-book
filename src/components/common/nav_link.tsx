"use client"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export default function NavLink({href, children, className}: Props) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      className={cn(
        "font-bold capitalize hover:opacity-70 transition-opacity duration-150",
        className,
        isActive && "text-blue-500"
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
