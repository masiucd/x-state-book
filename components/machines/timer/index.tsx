import styled from "@emotion/styled"
import {resetButtonStyles} from "@styles/common"
import {colorIntentions, elevations} from "@styles/styled-variables"
import {useMachine} from "@xstate/react"
import {AnimatePresence, motion} from "framer-motion"
import React, {useEffect} from "react"

import timeMachine from "./machine"

const TimerWrapper = styled(motion.section)`
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
`

const TimerBody = styled.div`
  padding: 1em;
  min-width: 40em;
`

const H3 = styled.h3`
  text-align: center;
  padding: 1rem;
  span {
    color: ${colorIntentions.danger};
  }
`

const Time = styled.div`
  text-align: center;
  button {
    ${resetButtonStyles}
    font-size: 2rem;
    border: none;
    box-shadow: none;
    width: 12rem;
    height: 6rem;
    &:disabled {
      color: ${colorIntentions.textColor};
    }
    span {
      display: block;
    }
  }
`

const ConfigButtons = styled(motion.div)`
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  button {
    ${resetButtonStyles}
  }
`

const PauseButton = styled.button`
  ${resetButtonStyles}
  border: none;
`

const HourMinSecWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: ${elevations.shadowLg};
  span {
    border-bottom: 2px solid ${colorIntentions.primary};
    display: inline-block;
  }
`

const ResetTimer = styled(motion.button)`
  box-shadow: ${elevations.shadowLg};
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  &:active {
  }
`

const calculateTime = (duration: number): string => {
  const hours = ~~(duration / 3600)
  const minutes = ~~((duration % 3600) / 60)
  const seconds = ~~duration % 60
  return `<span>${hours}</span>: <span>${minutes}</span>: <span>${seconds}</span>`
}

const Timer = (): JSX.Element => {
  const [state, send] = useMachine(timeMachine)
  const {duration, elapsed, interval} = state.context

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
    <TimerWrapper
      initial={{opacity: 0, y: "-100%"}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: "-100%"}}
    >
      <TimerBody>
        <H3>
          current state <span>{state.value}</span>{" "}
        </H3>

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
              transition={{duration: 0.5, flip: state.value === "paused" ? Infinity : 0}}
            >
              <HourMinSecWrapper
                dangerouslySetInnerHTML={{__html: calculateTime(duration - elapsed)}}
              />
            </motion.span>
          </motion.button>
        </Time>

        {state.value === "running" && (
          <>
            <PauseButton type="button" aria-label="pause" onClick={() => send("TOGGLE")}>
              ⏸
            </PauseButton>
          </>
        )}

        {state.value === "paused" && (
          <ResetTimer type="button" onClick={() => send("RESET")} whileHover={{scale: 1.1}}>
            reset timer
          </ResetTimer>
        )}

        <AnimatePresence>
          {state.value === "running" && (
            <ConfigButtons
              layout
              initial={{opacity: 0, y: "100%"}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: "100%"}}
              transition={{duration: 0.4, delay: 0.1}}
            >
              <button type="button" onClick={() => send("ADD_HOUR")}>
                + 1 hour
              </button>
              <button type="button" onClick={() => send("ADD_MINUTE")}>
                + 1 min
              </button>
              <button type="button" onClick={() => send("ADD_SECONDS")}>
                + 30 sec
              </button>
            </ConfigButtons>
          )}
        </AnimatePresence>
      </TimerBody>
    </TimerWrapper>
  )
}

export default Timer
