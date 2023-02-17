import Link from "next/link"
import {GitHub, Twitter} from "react-feather"

import {cn} from "@/lib/utils/styles"

import MainNav from "./main_nav"

interface Props {
  className?: string
}

export default function MainHeader({className}: Props) {
  return (
    <header
      className={cn(
        "sticky top-0 min-h-[3rem] bg-white shadow dark:bg-slate-900",
        className
      )}
    >
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
  )
}
