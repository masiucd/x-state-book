"use client"

import {useMachine} from "@xstate/react"
import * as Icon from "react-feather"

import toggleMachine from "@/machines/toggle/machine"

export default function Toggle() {
  const [state, send] = useMachine(toggleMachine)
  const active = state.matches("active")
  return (
    <div className="flex-1">
      <p>This is a toggle machine</p>
      <p>Click the button to toggle the state.</p>
      <button
        type="button"
        onClick={() => send({type: "TOGGLE"})}
        className="rounded-md border border-slate-800 p-2 shadow transition-all hover:shadow-lg active:translate-y-1"
      >
        <span className="flex min-w-[8rem] justify-between gap-2">
          {active ? (
            <>
              <span className="inline-block">
                {state.value.toString().toUpperCase()}
              </span>{" "}
              <Icon.Heart />{" "}
            </>
          ) : (
            <>
              <span className="inline-block">
                {state.value.toString().toUpperCase()}
              </span>{" "}
              <Icon.Heart className="fill-red-500" />{" "}
            </>
          )}
        </span>
      </button>
    </div>
  )
}
