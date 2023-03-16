import {assign, createMachine} from "xstate"

export const MACHINE_ID = "multiStepForm"

export type Category = "drama" | "comedy" | "action" | "horror" | "empty"
export const CATEGORIES: readonly Category[] = Object.freeze([
  "drama",
  "comedy",
  "action",
  "horror",
])

export type Event =
  | {
      type: "NEXT"
    }
  | {type: "PREVIOUS"}
  | {type: "SELECT_CATEGORY"; category: Category}

export interface Meta {
  title: string
}

export interface Context {
  movieName: string
  category: Category
}

const multiStepForm = createMachine(
  {
    predictableActionArguments: true,
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
          SELECT_CATEGORY: {
            actions: "selectCategory",
          },
        },
        meta: {
          title: "Select category",
        },
      },
      movieInfo: {
        on: {
          PREVIOUS: {
            target: "selectCategory",
          },
          NEXT: {
            target: "userInformation",
          },
        },
        meta: {
          title: "Movie info",
        },
      },
      userInformation: {
        on: {
          PREVIOUS: {
            target: "movieInfo",
          },
        },
        meta: {
          title: "User information",
        },
      },
    },
  },
  {
    actions: {
      selectCategory: assign((ctx, event) => {
        return {
          category: event.category,
        }
      }),
    },
  }
)

export default multiStepForm
