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
      "Finite State Machines are a mathematical model of computation that can be used to describe any system with discrete states",
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
      </div>
      <ul className="grid grid-cols-2 gap-5 p-5">
        {cards.map((card) => (
          <li key={card.title}>
            <div>
              <div>
                <card.image />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
