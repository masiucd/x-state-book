import Link from "next/link"

import Title from "@/components/common/title"

export default function AboutPage() {
  return (
    <div className="flex-1 border">
      <Title>
        <h1>About</h1>
        <p>Coming soon!</p>
        <Link className="border-b-2 border-slate-900" href="/">
          Home
        </Link>
      </Title>
    </div>
  )
}
