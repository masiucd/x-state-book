import Link from "next/link"
import React from "react"

import {cn} from "@/lib/utils/styles"

interface Props {
  className?: string
}

function MainNav({className}: Props) {
  return (
    <nav className={cn("flex", className)}>
      <ul className="flex justify-end gap-3">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/">about</Link>
        </li>
        <li>
          <Link href="/">contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
