import "@/styles/globals.css"

import {Inter as FontSans} from "@next/font/google"
import type {Metadata} from "next/types"
import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "X-state book",
    template: "%s | X-state book",
  },
  description: "State machines and state charts for the modern web.",
  openGraph: {
    title: "X-state book",
    description: "State machines and state charts for the modern web.",
    url: "https://x-state-book.vercel.app/",
    siteName: "X-state book",
    images: [
      {
        url: "https://x-state-book.vercel.app/og.jpeg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "X-state book",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
}

interface Props {
  children: ReactNode
}

export default function RootLayout({children}: Props) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 font-sans", fontSans.variable)}
    >
      <head />
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  )
}
