import Link from "next/link"
import React from "react"

import {PageWrapper} from "@/components/page_wrapper"

interface Props {
  children: React.ReactNode
}

export default function XstateLayout({children}: Props) {
  return (
    <>
      <header className="min-h-[5rem]">
        <nav>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="grid flex-1 grid-cols-12">
        <aside className="col-span-2 border-r border-slate-900">
          <h4>Machines</h4>
          <nav>
            <ul>
              <li>
                <Link href="/states/toggle">toggle</Link>
              </li>
              <li>
                <Link href="/states/signup">sign up wizzard</Link>
              </li>
              <li>
                <Link href="/states">timer</Link>
              </li>
              <li>
                <Link href="/states">gussing game</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <PageWrapper className="col-span-10 flex-1 bg-red-500" fluid>
          {children}
        </PageWrapper>
      </div>
      <footer className="min-h-[5rem] border border-red-500">
        <p>footer</p>
      </footer>
    </>
  )
}
