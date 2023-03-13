import {createMachine} from "xstate"

export const MACHINE_ID = "multiStepForm"

type Category = "drama" | "comedy" | "action" | "horror" | "empty"
export const CATEGORIES: readonly Category[] = Object.freeze([
  "drama",
  "comedy",
  "action",
  "horror",
])

type Event = {
  type: "NEXT"
}

export interface Meta {
  title: string
}

interface Context {
  movieName: string
  category: Category
}

const multiStepForm = createMachine({
  schema: {
    context: {} as Context,
    events: {} as Event,
  },
  tsTypes: {} as import("./machine.typegen").Typegen0,
  id: MACHINE_ID,
  initial: "selectCategory",
  context: {
    movieName: "",
    category: "empty",
  },
  states: {
    selectCategory: {
      on: {
        NEXT: {
          target: "movieInfo",
        },
      },
      meta: {
        title: "Select Option",
      },
    },
    movieInfo: {
      //
    },
  },
})

export default multiStepForm
