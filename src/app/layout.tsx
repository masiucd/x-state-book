import "@/styles/globals.css"

import {Inter as FontSans} from "@next/font/google"
import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface Props {
  children: ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html
      lang="en"
      className={cn("bg-white font-sans text-slate-900", fontSans.variable)}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}
