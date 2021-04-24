import React, { useEffect } from "react"
import { createMachine, assign } from "xstate"
import { useMachine } from "@xstate/react"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"

interface TimerContext {
  duration: number
  elapsed: number
  interval: number
}

type TimerEvents =
  | { type: "TOGGLE" }
  | { type: "TICK" }
  | { type: "ADD_MINUTE" }
  | { type: "RESET" }

const timerExpired = (ctx: TimerContext) => ctx.elapsed >= ctx.duration

const timeMachine = createMachine<TimerContext, TimerEvents>(
  {
    id: "timeMachine",
    initial: "idle",
    context: {
      duration: 5,
      elapsed: 0,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: ["resetTimer"],
        on: {
          TOGGLE: {
            target: "running",
          },
        },
      },
      running: {
        always: {
          target: "expired",
          cond: timerExpired,
        },
        on: {
          TICK: {
            actions: ["tick"],
          },
          TOGGLE: {
            target: "paused",
          },
          ADD_MINUTE: {
            actions: ["addMinute"],
          },
        },
      },
      paused: {
        on: {
          TOGGLE: {
            target: "running",
          },
          RESET: {
            target: "idle",
          },
        },
      },
      expired: {
        always: {
          target: "idle",
        },
      },
    },
  },
  {
    actions: {
      resetTimer: assign({
        duration: 5,
        elapsed: 0,
        interval: 0.1,
      }),
      tick: assign({
        elapsed: ctx => ctx.elapsed + ctx.interval,
      }),
      addMinute: assign({
        duration: ctx => ctx.duration + 60,
      }),
    },
  }
)

const TimerBody = styled.div``

const calculateTime = (duration: number): string => {
  const hours = ~~(duration / 3600)
  const minutes = ~~((duration % 3600) / 60)
  const seconds = ~~duration % 60

  return ` ${hours}: ${minutes}: ${seconds} `
}

const Timer = (): JSX.Element => {
  const [state, send] = useMachine(timeMachine)
  const { state: isDecimal, toggle: toggleIsDecimal } = useToggle()
  const { duration, elapsed, interval } = state.context

  useEffect(() => {
    if (state.value === "running") {
      const timerId = setInterval(() => {
        send("TICK")
      }, 1000 * interval)
      return () => {
        clearInterval(timerId)
      }
    }
  }, [interval, send, state.value])

  return (
    <div>
      <h3>current state {state.value} </h3>

      <TimerBody>
        <button type="button" onClick={() => send("TOGGLE")} disabled={state.value === "running"}>
          Start
        </button>

        {isDecimal ? (
          <strong>{(duration - elapsed).toFixed(2)}</strong>
        ) : (
          <strong>{Math.ceil(duration - elapsed)}</strong>
        )}

        <strong>{calculateTime(duration - elapsed)}</strong>

        <button type="button" onClick={() => send("TOGGLE")} disabled={state.value === "paused"}>
          pause
        </button>

        {state.value === "running" && (
          <button type="button" onClick={() => send("ADD_MINUTE")}>
            Add a minute
          </button>
        )}

        {state.value === "paused" && (
          <button type="button" onClick={() => send("RESET")}>
            reset
          </button>
        )}

        <button onClick={toggleIsDecimal}>
          {isDecimal ? "without decimals" : "with decimals"}
        </button>
      </TimerBody>
    </div>
  )
}

export default Timer
