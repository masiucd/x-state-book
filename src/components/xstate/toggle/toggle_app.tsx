"use client"
import {useMachine} from "@xstate/react"
import {useEffect} from "react"

import Icons from "@/components/icons/icons"
import {cn} from "@/lib/utils/styles"
import toggleMachine, {StateType} from "@/machines/toggle/machine"

const serializeState = (state: StateType) =>
  JSON.stringify({
    ...state,
  })

const deserializeState = (serializedState: string) => {
  if (!serializedState) return toggleMachine.initialState
  const state = JSON.parse(serializedState)
  const {value} = state
  if (!toggleMachine.states[value]) return toggleMachine.initialState
  const meta = toggleMachine.states[value].meta
  return {
    ...state,
    meta,
  }
}

// save the state to local storage
const saveState = (state: StateType) => {
  localStorage.setItem("toggle", serializeState(state))
}

const retrieveState = () => {
  const serializedState = localStorage.getItem("toggle")
  if (!serializedState) return toggleMachine.initialState
  return deserializeState(serializedState)
}

export default function ToggleApp() {
  const [state, send, service] = useMachine(toggleMachine, {
    state: retrieveState(),
  })

  useEffect(() => {
    const subscription = service.subscribe((state) => {
      saveState(state)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [service])

  return (
    <div>
      <p
        className={cn(
          "text-slate-700",
          state.matches("inactive") ? "opacity-50" : "opacity-100"
        )}
      >
        Click the heart to make a change
      </p>
      <h3> I am {state.matches("inactive") ? "inactive" : "active"} </h3>
      <button
        type="button"
        onClick={() => {
          send({type: "TOGGLE"})
        }}
      >
        <Icons.heart isOn={state.matches("active")} />
      </button>
    </div>
  )
}
