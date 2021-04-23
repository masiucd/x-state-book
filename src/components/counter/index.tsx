import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { assign, createMachine } from "xstate"

interface CountCtx {
  count: number
}

type CountMachineEvents =
  | { type: "ON" }
  | { type: "OFF" }
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }

const counterMachine = createMachine<CountCtx, CountMachineEvents>(
  {
    id: "counterMachine",
    initial: "inactive",
    context: {
      count: 0,
    },
    states: {
      inactive: {
        entry: ["resetCount"],
        on: {
          ON: {
            target: "active",
          },
        },
      },
      active: {
        on: {
          OFF: {
            target: "inactive",
          },
          INCREMENT: {
            actions: ["incrementCount"],
          },
          DECREMENT: {
            actions: ["decrementCount"],
          },
          RESET: {
            actions: ["resetCount"],
          },
        },
      },
    },
  },
  {
    actions: {
      incrementCount: assign({
        count: (ctx: CountCtx) => ctx.count + 1,
      }),
      decrementCount: assign({
        count: (ctx: CountCtx) => ctx.count - 1,
      }),
      resetCount: assign({
        count: 0,
      }),
    },
  }
)

const Wrapper = styled.div`
  /*  */
`

const Box = styled.div``

const Counter = () => {
  const [state, send] = useMachine(counterMachine)

  const isInactive = state.matches("inactive")
  const isActive = state.matches("active")

  return (
    <Wrapper>
      <h3>
        current state <span>{state.value}</span>
      </h3>

      <Box>
        <button type="button" onClick={() => send("ON")} disabled={isActive}>
          on
        </button>
        <button type="button" onClick={() => send("OFF")} disabled={isInactive}>
          off
        </button>
      </Box>

      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <strong>{state.context.count}</strong>
            <button type="button" onClick={() => send("INCREMENT")}>
              increase
            </button>
            <button
              type="button"
              onClick={() => send("DECREMENT")}
              disabled={state.context.count === 0}
            >
              decrease
            </button>

            <button
              type="button"
              onClick={() => send("RESET")}
              disabled={state.context.count === 0}
            >
              reset
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Counter
