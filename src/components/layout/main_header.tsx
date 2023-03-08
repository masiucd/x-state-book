import Link from "next/link"

import {cn} from "@/lib/utils/styles"

interface Props {
  className?: string
}

export default function MainHeader({className}: Props) {
  return (
    <header
      className={cn(
        "sticky top-0 min-h-[3rem] max-h-[10rem] flex items-center bg-white shadow dark:bg-slate-900 border",
        className
      )}
    >
      <div className="w-full px-10">
        <div>
          <Link href="/">
            <span>X state book</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
