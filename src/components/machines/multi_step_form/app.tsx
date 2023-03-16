"use client"
import {useMachine} from "@xstate/react"
import {motion} from "framer-motion"
import {StateValue} from "xstate"

import multiStepForm, {
  Category,
  Context,
  MACHINE_ID,
  Meta,
  Movies,
} from "@/machines/multi_step_form/machine"

import FooterButton from "./footer_button"
import SelectCateGory from "./select_category"
import SelectMovies from "./select_movies"

const MOVIES: Movies = Object.freeze({
  empty: [],
  action: [
    {
      id: 1,
      title: "Die Hard",
      poster_path: "/die-hard.jpg",
      release_date: "1988-07-15",
      vote_average: 8.2,
    },
    {
      id: 2,
      title: "The Matrix",
      poster_path: "/the-matrix.jpg",
      release_date: "1999-03-30",
      vote_average: 8.7,
    },
  ],
  comedy: [
    {
      id: 1,
      title: "Bruce Almighty",
      poster_path: "/bruce-almighty.jpg",
      release_date: "2003-05-23",
      vote_average: 6.7,
    },
    {
      id: 2,
      title: "The Hangover",
      poster_path: "/the-hangover.jpg",
      release_date: "2009-06-05",
      vote_average: 7.7,
    },
  ],
  drama: [
    {
      id: 1,
      title: "Titanic",
      poster_path: "/titanic.jpg",
      release_date: "1997-11-18",
      vote_average: 7.8,
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path: "/the-godfather.jpg",
      release_date: "1972-03-14",
      vote_average: 8.6,
    },
  ],
  horror: [
    {
      id: 1,
      title: "The Shining",
      poster_path: "/the-shining.jpg",
      release_date: "1980-05-23",
      vote_average: 8.4,
    },
    {
      id: 2,
      title: "The Conjuring",
      poster_path: "/the-conjuring.jpg",
      release_date: "2013-07-18",
      vote_average: 7.5,
    },
  ],
})

export default function MultiStepFormApp() {
  const [state, send] = useMachine(multiStepForm)

  const {title} = state.meta[
    `${state.machine?.id ?? MACHINE_ID}.${state.value}`
  ] as Meta
  const nextButtonEnabled = isNextButtonEnabled(state.context)

  return (
    <motion.div
      className="flex max-h-[600px] min-h-[300px] min-w-[300px] flex-col rounded border border-slate-900/50 shadow-md md:min-h-[500px] md:min-w-[750px]"
      initial={{opacity: 0, scale: 0.2}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <div className="rounded border-b border-slate-900 bg-gray-100 p-1 shadow">
        <h4 className="text-2xl">{title}</h4>
      </div>

      <section className="flex flex-1 flex-col p-2">
        {renderBody(state.value, state.context, {
          selectCategory: (category: Category) =>
            send({type: "SELECT_CATEGORY", category}),
        })}
      </section>

      <div className="flex justify-end px-5 py-2">
        <div className="flex gap-3">
          {!state.matches("selectCategory") && (
            <FooterButton
              enabled={true}
              onClick={() => {
                send({type: "PREVIOUS"})
              }}
              text="Previous"
            />
          )}
          <FooterButton
            onClick={() => {
              send({type: "NEXT"})
            }}
            text="Next"
            enabled={nextButtonEnabled}
          />
        </div>
      </div>
    </motion.div>
  )
}

function isNextButtonEnabled({category}: Context) {
  if (category !== "empty") {
    return true
  }
  return false
}

interface Handlers {
  // eslint-disable-next-line no-unused-vars
  selectCategory: (category: Category) => void
}

function renderBody(
  stateValue: StateValue,
  context: Context,
  handlers: Handlers
) {
  switch (stateValue) {
    case "selectCategory":
      return (
        <SelectCateGory
          selectCategory={handlers.selectCategory}
          context={context}
        />
      )
    case "selectMovies":
      const movies = MOVIES[context.category]
      return <SelectMovies movies={movies} />
    case "userInformation":
      return <div>User Information</div>
    default:
      return null
  }
}
