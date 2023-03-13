"use client"

import {useMachine} from "@xstate/react"
import {motion} from "framer-motion"

import multiStepForm, {
  MACHINE_ID,
  Meta,
} from "@/machines/multi_step_form/machine"

export default function MultiStepFormApp() {
  const [state, send] = useMachine(multiStepForm)

  const {title} = state.meta[
    `${state.machine?.id ?? MACHINE_ID}.${state.value}`
  ] as Meta

  return (
    <motion.div
      className="flex max-h-[600px] min-h-[300px] min-w-[300px] flex-col rounded-md border border-slate-900/50 shadow-md md:min-h-[500px] md:min-w-[750px]"
      initial={{opacity: 0, scale: 0.2}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <div className="bg-gray-200 p-1 shadow">
        <h4 className="text-2xl">{title}</h4>
      </div>
      {/* body */}
      <section className="flex flex-1 flex-col border border-red-500 p-2">
        MultiStepFormApp
      </section>
      {/* footer */}
      <div className="flex justify-end px-5 py-2">
        <div className="flex gap-3">
          {!state.matches("selectCategory") && <button>Previous</button>}
          <button
            onClick={() => {
              send({type: "NEXT"})
            }}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
}
