import Link from "next/link"

import Title from "@/components/common/title"

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col justify-center">
      <Title>
        <h1>About</h1>
        <p>Coming soon!</p>
      </Title>
      <div className="flex gap-3 px-2">
        <Link className="text-blue-500 hover:opacity-40" href="/">
          Home
        </Link>
        <Link className="text-blue-500 hover:opacity-40" href="/machines">
          Machines
        </Link>
      </div>
    </div>
  )
}
