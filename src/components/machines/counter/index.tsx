import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

import Button from "@components/styled/button"
import counterMachine from "./machine"

const Wrapper = styled(motion.div)`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Box = styled.div``

const Counter = (): JSX.Element => {
  const [state, send] = useMachine(counterMachine)

  const isInactive = state.matches("inactive")
  const isActive = state.matches("active")

  return (
    <Wrapper
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
    >
      <h3>
        current state <span>{state.value}</span>
      </h3>

      <Box>
        <Button onClick={() => send("ON")} isDisabled={isActive}>
          on
        </Button>
        <Button onClick={() => send("OFF")} isDisabled={isInactive}>
          off
        </Button>
      </Box>

      <AnimatePresence>
        {isActive && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <strong>{state.context.count}</strong>
            <Button onClick={() => send("INCREMENT")}>increase</Button>
            <Button onClick={() => send("DECREMENT")} isDisabled={state.context.count === 0}>
              decrease
            </Button>

            <Button onClick={() => send("RESET")} isDisabled={state.context.count === 0}>
              reset
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Counter
