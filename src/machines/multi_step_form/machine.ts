import {assign, createMachine} from "xstate"

export type Category = "drama" | "comedy" | "action" | "horror" | "empty"
export type Event =
  | {
      type: "NEXT"
    }
  | {type: "PREVIOUS"}
  | {type: "SELECT_CATEGORY"; category: Category}
  | {type: "SELECT_MOVIE"; movie: Movie}

export interface Meta {
  title: string
}

export interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: string
  vote_average: number
}

export type Movies = Record<Category, readonly Movie[]>

export const MACHINE_ID = "multiStepForm"

export const CATEGORIES: readonly Category[] = Object.freeze([
  "drama",
  "comedy",
  "action",
  "horror",
])

export interface Context {
  category: Category
  movie: null | Movie
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
      category: "empty",
      movie: null,
    },
    states: {
      selectCategory: {
        on: {
          NEXT: {
            target: "selectMovies",
          },
          SELECT_CATEGORY: {
            actions: "selectCategory",
          },
        },
        meta: {
          title: "Select category",
        },
      },
      selectMovies: {
        on: {
          PREVIOUS: {
            target: "selectCategory",
          },
          NEXT: {
            target: "userInformation",
          },
          SELECT_MOVIE: {
            actions: "selectMovie",
          },
        },
        meta: {
          title: "Select movie",
        },
      },
      userInformation: {
        on: {
          PREVIOUS: {
            target: "selectMovies",
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
      selectCategory: assign((_, event) => {
        return {
          category: event.category,
        }
      }),
      selectMovie: assign((_, event) => {
        return {
          movie: event.movie,
        }
      }),
    },
  }
)

export default multiStepForm
