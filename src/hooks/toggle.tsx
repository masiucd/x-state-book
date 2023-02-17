"use client"
import {useMemo, useState} from "react"

type ReturnType = [
  boolean,
  {
    toggle: () => void
    toFalse: () => void
    toTrue: () => void
    reset: () => void
  }
]

function useToggle(initialState = false): ReturnType {
  const [state, setState] = useState(initialState)

  const handlers = useMemo(
    () => ({
      toggle: () => {
        setState((prev) => !prev)
      },
      toFalse: () => {
        setState(false)
      },
      toTrue: () => {
        setState(true)
      },
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )

  return [state, handlers]
}

export default useToggle
