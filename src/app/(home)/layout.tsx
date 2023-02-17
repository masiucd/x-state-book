import Link from "next/link"
import {ReactNode} from "react"
import {GitHub, Twitter} from "react-feather"

import MainNav from "@/components/layout/main_nav"
import {PageWrapper} from "@/components/page_wrapper"

interface Props {
  children: ReactNode
}

export default function HomeLayout({children}: Props) {
  return (
    <>
      <header className="sticky top-0 min-h-[3rem] bg-white shadow dark:bg-slate-900">
        <div className=" mx-auto flex max-w-5xl items-center justify-between gap-5 py-3 px-10 ">
          <div className="flex items-center gap-5">
            <Link href="/">
              <span>X state book</span>
            </Link>
            <div>
              <input
                type="text"
                placeholder="...search"
                className="rounded-md border-2 border-slate-600 pl-2 shadow"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <MainNav />
            <div className="flex gap-3">
              <button>Theme</button>
              <ul className="flex items-center gap-3">
                <li>
                  <Twitter size={18} />
                </li>
                <li>
                  <GitHub size={18} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <PageWrapper className="flex-1">{children}</PageWrapper>
      <footer className="min-h-[5rem] ">
        <div className="mx-auto flex max-w-2xl justify-center gap-1">
          <small>©{new Date().getFullYear()} X state book | </small>
          <small>Built with Next.js and Tailwind CSS | </small>
          <small>Deployed on Vercel</small>
        </div>
      </footer>
    </>
  )
}
