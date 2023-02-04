"use client"

import {useMachine} from "@xstate/react"
import {useEffect} from "react"

import toggleMachine, {StateType} from "@/machines/toggle/machine"

const serializeState = (state: StateType) => {
  // const {value, context, actions, activities, events} = state
  // eslint-disable-next-line no-unused-vars
  const {meta, ...rest} = state
  return JSON.stringify({
    ...rest,
  })
}

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
  const {fn, buttonText} = state.meta[`toggle.${state.value}`]
  useEffect(() => {
    const subscription = service.subscribe(state => {
      saveState(state)
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [service])

  return (
    <div>
      <h3>I am {buttonText} </h3>
      <button
        type="button"
        onClick={() => {
          send({type: "TOGGLE"})
          fn()
        }}
      >
        {state.matches("inactive") ? "Off" : "On"}
      </button>
    </div>
  )
}
