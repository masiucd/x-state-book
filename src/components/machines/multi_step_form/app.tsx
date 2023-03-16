"use client"
import {useMachine} from "@xstate/react"
import {motion} from "framer-motion"
import {StateValue} from "xstate"

import {cn} from "@/lib/utils/styles"
import multiStepForm, {
  CATEGORIES,
  Category,
  Context,
  MACHINE_ID,
  Meta,
} from "@/machines/multi_step_form/machine"

export default function MultiStepFormApp() {
  const [state, send] = useMachine(multiStepForm)

  const {title} = state.meta[
    `${state.machine?.id ?? MACHINE_ID}.${state.value}`
  ] as Meta
  const nextButtonEnabled = isNextButtonEnabled(state.context)

  return (
    <motion.div
      className="flex max-h-[600px] min-h-[300px] min-w-[300px] flex-col rounded-md border border-slate-900/50 shadow-md md:min-h-[500px] md:min-w-[750px]"
      initial={{opacity: 0, scale: 0.2}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <div className="rounded-md border-b border-slate-900 bg-gray-200 p-1 shadow">
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

function disabledStyle() {
  return "cursor-not-allowed opacity-40"
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
    case "movieInfo":
      return <div>Movie Info</div>
    case "userInformation":
      return <div>User Information</div>
    default:
      return null
  }
}

interface SelectCateGoryProps {
  // eslint-disable-next-line no-unused-vars
  selectCategory: (category: Category) => void
  context: Context
}

function SelectCateGory({selectCategory, context}: SelectCateGoryProps) {
  return (
    <div>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category}>
            <label
              htmlFor={`radio-${category}`}
              className="flex items-center gap-2"
            >
              <input
                type="radio"
                onChange={() => {
                  selectCategory(category)
                }}
                name="category"
                id={`radio-${category}`}
                checked={category === context.category}
              />
              <span
                className={cn(
                  "inline-block text-lg capitalize opacity-60 transition-all duration-300 ease-in-out -translate-x-1",
                  category === context.category && "opacity-100 translate-x-0"
                )}
              >
                {category}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FooterButtonProps {
  onClick: () => void
  enabled: boolean
  text: string
}
function FooterButton({onClick, enabled, text}: FooterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 border shadow border-slate-900 rounded-md bg-slate-100 hover:shadow-md",
        !enabled && disabledStyle()
      )}
      disabled={!enabled}
    >
      {text}
    </button>
  )
}
