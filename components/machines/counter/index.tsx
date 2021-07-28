import styled from "@emotion/styled"
import { useMachine } from "@xstate/react"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

import Button from "@components/styled/button"
import counterMachine from "./machine"
import { elements, elevations } from "@styles/styled-variables"

const Wrapper = styled(motion.div)`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  & [data-animate="true"] {
    width: 100%;
    margin-bottom: 1em;
  }
  .counter-element {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.5rem auto;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
    background-clip: padding-box;
    /* !importanté */
    border: solid 1px transparent;
    /* !importanté */
    box-shadow: ${elevations.shadowLg};
    span {
      font-size: 2rem;

      line-height: 3ch;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -5px;
      border-radius: inherit;
      background: linear-gradient(to right, ${elements.strokeColor}, ${elements.common});
    }
  }
`

const Box = styled.div`
  display: flex;
  button {
    margin-left: 0.35em;
  }
`

const Buttons = styled.div`
  display: flex;
`

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
          <motion.div
            data-animate={isActive}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <aside className="counter-element">
              <span>{state.context.count}</span>
            </aside>
            <Buttons>
              <Button onClick={() => send("INCREMENT")}>increase</Button>
              <Button onClick={() => send("DECREMENT")} isDisabled={state.context.count === 0}>
                decrease
              </Button>
              <Button onClick={() => send("RESET")} isDisabled={state.context.count === 0}>
                reset
              </Button>
            </Buttons>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Counter
