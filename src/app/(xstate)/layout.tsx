import Link from "next/link"
import {ReactNode} from "react"

import MainHeader from "@/components/layout/main_header"
import {PageWrapper} from "@/components/page_wrapper"

interface Props {
  children: ReactNode
}

export default function XstateLayout({children}: Props) {
  return (
    <>
      <MainHeader />
      <div className="grid flex-1 grid-cols-12 pt-2">
        <aside className="col-span-2 border-r border-slate-900">
          <h4>Machines</h4>
          <nav>
            <ul>
              <li>
                <Link href="/machines/toggle">toggle</Link>
              </li>
              <li>
                <Link href="/machines/signup">sign up wizzard</Link>
              </li>
              <li>
                <Link href="/machines/timer">timer</Link>
              </li>
              <li>
                <Link href="/machines/guess-game">gussing game</Link>
              </li>
            </ul>
          </nav>
        </aside>
        <PageWrapper className="col-span-10 flex-1 pl-2" fluid>
          {children}
        </PageWrapper>
      </div>
      <footer className="min-h-[5rem] border border-red-500">
        <p>footer</p>
      </footer>
    </>
  )
}
