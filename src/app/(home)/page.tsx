import * as Icon from "react-feather"

import Button from "@/components/common/button"
import Icons from "@/components/icons/icons"

const cards = [
  {
    title: "Handle complex logic",
    description:
      "XState is a JavaScript library for modeling and managing state",
    image: Icon.BarChart,
  },
  {
    title: "State machines and statecharts",
    description:
      "XState is a JavaScript library for modeling and managing state",
    image: Icon.BarChart,
  },
  {
    title: "Simplify complex logic",
    description:
      "XState is a JavaScript library for modeling and managing state",
    image: Icon.Anchor,
  },
  {
    title: "Finite State Machines",
    description:
      "Finite State Machines are a mathematical model of computation that can be used to describe any system with discrete states",
    image: Icon.Award,
  },
  {
    title: "Statecharts",
    description:
      "Statecharts are a formal notation for describing the behavior of state machines",
    image: Icon.Bell,
  },
  {
    title: "Actor model",
    description:
      "The actor model is a mathematical model of concurrent computation",
    image: Icon.BellOff,
  },
]

export default function Home() {
  return (
    <div className="flex-1 items-center justify-center py-20">
      <div className="mb-10 grid grid-cols-1 gap-3 lg:grid-cols-6">
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
            <Button apperence="primary" href="/machines">
              Get Started
            </Button>
            <Button href="/about">Why XState?</Button>
            <Button href="/docs">Docs</Button>
          </div>
        </div>
        <div>
          {/* TODO own logo */}
          <Icons.xstate />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col gap-5 rounded-md border-2 border-slate-900 bg-slate-50 p-2 shadow"
          >
            <div>
              <card.image />
            </div>
            <h3>{card.title}</h3>
            <p className="mt-auto">{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
