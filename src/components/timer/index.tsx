import React, { useEffect } from "react"
import { createMachine, assign } from "xstate"
import { useMachine } from "@xstate/react"
import styled from "@emotion/styled"
import { colorIntentions } from "@styles/styled-variables"
import { resetButtonStyles } from "@styles/common"
import { AnimatePresence, motion } from "framer-motion"

interface TimerContext {
  duration: number
  elapsed: number
  interval: number
}

type TimerEvents =
  | { type: "TOGGLE" }
  | { type: "TICK" }
  | { type: "ADD_MINUTE" }
  | { type: "ADD_HOUR" }
  | { type: "ADD_SECONDS" }
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
          ADD_HOUR: {
            actions: "addHour",
          },
          ADD_MINUTE: {
            actions: "addMinute",
          },
          ADD_SECONDS: {
            actions: "addSeconds",
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
      addHour: assign({
        duration: ctx => ctx.duration + 3600,
      }),
      addSeconds: assign({
        duration: ctx => ctx.duration + 30,
      }),
    },
  }
)

const TimerWrapper = styled.section`
  min-height: 75vh;
  border: 2px solid red;
  display: grid;
  align-items: center;
  justify-content: center;
`

const TimerBody = styled.div`
  border: 2px solid ${colorIntentions.primary};
  padding: 1rem;
`

const Time = styled.div`
  border: 2px solid red;
  text-align: center;
  cursor: pointer;
  button {
    ${resetButtonStyles}
    font-size: 2rem;
    border: none;
    background: none;
    &:disabled {
      color: ${colorIntentions.textColor};
    }
    span {
      display: block;
    }
  }
`

const ConfigButtons = styled.div``

const PauseButton = styled.button`
  ${resetButtonStyles}
  border: none;
`

const calculateTime = (duration: number): string => {
  const hours = ~~(duration / 3600)
  const minutes = ~~((duration % 3600) / 60)
  const seconds = ~~duration % 60
  return `${hours}: ${minutes}: ${seconds} `
}

const Timer = (): JSX.Element => {
  const [state, send] = useMachine(timeMachine)

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
    <TimerWrapper>
      <h3>current state {state.value} </h3>

      <TimerBody>
        {/* <button type="button" onClick={() => send("TOGGLE")} disabled={state.value === "running"}>
          Start
        </button> */}

        {/* {isDecimal ? (
          <strong>{(duration - elapsed).toFixed(2)}</strong>
        ) : (
          <strong>{Math.ceil(duration - elapsed)}</strong>
        )} */}

        <Time>
          <motion.button
            type="button"
            onClick={() => send("TOGGLE")}
            disabled={state.value === "running"}
          >
            <motion.span
              animate={{
                scale: state.value === "paused" ? 1.4 : 1,
              }}
              transition={{ duration: 0.5, flip: state.value === "paused" ? Infinity : 0 }}
            >
              {calculateTime(duration - elapsed)}
            </motion.span>
          </motion.button>
        </Time>

        {state.value === "running" && (
          <PauseButton type="button" aria-label="pause" onClick={() => send("TOGGLE")}>
            ⏸
          </PauseButton>
        )}
        <AnimatePresence>
          {state.value === "running" && (
            <ConfigButtons>
              <button type="button" onClick={() => send("ADD_HOUR")}>
                Add a hour
              </button>
              <button type="button" onClick={() => send("ADD_MINUTE")}>
                Add a minute
              </button>
              <button type="button" onClick={() => send("ADD_SECONDS")}>
                add 30 sec
              </button>
            </ConfigButtons>
          )}
        </AnimatePresence>
        {/* 


        {state.value === "paused" && (
          <button type="button" onClick={() => send("RESET")}>
            reset
          </button>
        )}

        <button onClick={toggleIsDecimal}>
          {isDecimal ? "without decimals" : "with decimals"}
        </button> */}
      </TimerBody>
    </TimerWrapper>
  )
}

export default Timer
