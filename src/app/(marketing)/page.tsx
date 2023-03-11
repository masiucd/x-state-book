import Link from "next/link"

import CardItem from "./components/card_item"
import cards from "./utils/cards"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20">
      <div className="mb-20">
        <h1 className="border-b-2 border-slate-500">
          <span className="text-4xl font-bold md:text-6xl">X state book</span>
        </h1>
        <div className="flex gap-5 py-5">
          <Link href="/machines">
            <span className="border-b-2 border-slate-500">Machines</span>
          </Link>
          <Link href="/about">
            <span className="border-b-2 border-slate-500">About</span>
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
        {cards.map(card => (
          <CardItem key={card.title} card={card} />
        ))}
      </ul>
    </div>
  )
}
