import Link from "next/link"
import * as Icon from "react-feather"

const cards = [
  {
    title: "Handle complex logic",
    description:
      "Make complex logic easy to understand and maintain with statecharts",
    image: Icon.BarChart,
  },
  {
    title: "State machines and statecharts",
    description:
      "Statecharts are a formal notation for describing the behavior of state machines",
    image: Icon.Activity,
  },
  {
    title: "Awesome Developer experience",
    description: "Great developer experience with X state and the devtools",
    image: Icon.Code,
  },
  {
    title: "Finite State Machines",
    description:
      "Finite state machines are a mathematical model of computation that can be used to design software",
    image: Icon.Award,
  },
]

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
        {cards.map((card) => (
          <li key={card.title}>
            <div className="flex flex-col gap-3">
              <div>
                <card.image />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="">
                  {card.description}{" "}
                  <span className="font-bold text-slate-900">&rarr;</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
