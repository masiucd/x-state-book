import * as Icon from "react-feather"

export interface Card {
  title: string
  description: string
  image: Icon.Icon
}

const cards: Card[] = [
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

export default cards
