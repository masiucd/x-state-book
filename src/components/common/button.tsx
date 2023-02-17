import Link from "next/link"
import {ButtonHTMLAttributes, ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

export type Apperence = "primary" | "secondary" | "tertiary"

export interface Props {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  apperence?: Apperence
  className?: string
  href?: string
  disabled?: boolean
  onClick?: () => void
}

function apperenceStyles(apperence: Props["apperence"]) {
  switch (apperence) {
    case "primary":
      return "bg-gradient-to-r from-cyan-500 to-blue-500"
    case "secondary":
      return "bg-gray-200 text-gray-700"
    case "tertiary":
      return "bg-transparent text-gray-700"
    default:
      return "bg-zinc-900 text-white"
  }
}

function Button({
  children,
  type,
  apperence,
  className,
  href,
  disabled = false,
  onClick,
}: Props) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "px-4 py-2 rounded-md font-bold shadow hover:opacity-60 transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed",
          apperenceStyles(apperence),
          className
        )}
      >
        {children}
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={cn(
        "px-4 py-2 rounded-md font-bold shadow hover:opacity-60 transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed",
        apperenceStyles(apperence),
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
