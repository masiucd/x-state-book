import Link from "next/link"

import Icons from "@/components/icons/icons"

export default function Home() {
  return (
    <div className="flex-1 items-center justify-center border py-20">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-6">
        <div className="col-span-3 mb-5 lg:mb-0 ">
          <h1 className="block bg-gradient-to-b from-slate-900 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
            XState
          </h1>
          <h2 className="text-4xl capitalize">
            state machines and statecharts!
          </h2>
          <p>Simplify complex logic and state management with statecharts.</p>
          <p>XState is a JavaScript library for modeling and managing state</p>
          <div className="flex gap-5">
            <Link href="/">Get Started</Link>
            <Link href="/">Why XState?</Link>
            <Link href="/">Docs</Link>
          </div>
        </div>
        <div>
          {/* TODO own logo */}
          <Icons.xstate />
        </div>
      </div>
      {/* TODO!! Cards */}
    </div>
  )
}
