import Link from "next/link"
import React from "react"

import {PageWrapper} from "@/components/page_wrapper"

interface Props {
  children: React.ReactNode
}

export default function HomeLayout({children}: Props) {
  return (
    <>
      <header className="min-h-[5rem]">
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <Link href="/">home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <PageWrapper className="flex-1">{children}</PageWrapper>
      <footer className="min-h-[5rem] border border-red-500">
        <p>footer</p>
      </footer>
    </>
  )
}
