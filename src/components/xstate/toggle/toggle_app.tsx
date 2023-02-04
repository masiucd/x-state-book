"use client"
import {useMachine} from "@xstate/react"
import {useEffect} from "react"

import toggleMachine from "@/machines/toggle/machine"

const serializeState = state => {
  // const {value, context, actions, activities, events} = state
  // eslint-disable-next-line no-unused-vars
  const {meta, ...rest} = state
  return JSON.stringify({
    rest,
  })
}

const deserializeState = serializedState => {
  if (!serializedState) return toggleMachine.initialState

  const state = JSON.parse(serializedState)

  const {value, context, actions, activities, events} = state

  if (!toggleMachine.states[value]) return toggleMachine.initialState

  const meta = toggleMachine.states[value].meta
  return {
    value,
    context,
    actions,
    activities,
    events,
    meta,
  }
}

// save the state to local storage
const saveState = state => {
  localStorage.setItem("toggle", serializeState(state))
}

// const retrieveState = () => {
//   const serializedState = localStorage.getItem("toggle")
//   if (serializedState) {
//     return deserializeState(serializedState)
//   }
//   return toggleMachine.initialState
// }

const retrieveState = () => {
  const serializedState = localStorage.getItem("toggle")
  return deserializeState(serializedState) || toggleMachine.initialState
}

export default function ToggleApp() {
  const [state, send, service] = useMachine(toggleMachine, {
    state: retrieveState(),
  })
  console.log("state", state)
  const {fn, buttonText} = state.meta[`toggle.${state.value}`]
  // console.log("fn,buttonText", fn, buttonText)
  // console.log("state", state)
  // console.log("state", state.toJSON())
  // console.log(JSON.parse(JSON.stringify(state)))

  useEffect(() => {
    const subscription = service.subscribe(state => {
      console.log("state", state)
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
