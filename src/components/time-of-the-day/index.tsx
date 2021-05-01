import { useMachine } from "@xstate/react"
import React from "react"
import { createMachine } from "xstate"
import { getHours, getMinutes } from "date-fns"
import styled from "@emotion/styled"

interface TimeOfTheDayCtx {
  time: Date
}

const timeOfTheDayMachine = createMachine<TimeOfTheDayCtx>(
  {
    id: "timeOfTheDay",
    initial: "unknown",
    context: {
      time: new Date(),
    },
    states: {
      unknown: {
        always: [
          { target: "morning", cond: "isMorning" },
          { target: "afternoon", cond: "isAfternoon" },
          { target: "evening" },
        ],
      },
      morning: {
        meta: "Noooo I just want to sleep",
      },
      afternoon: {
        meta: "time to do some work",
      },
      evening: {
        meta: "I am so sleepy",
      },
    },
  },
  {
    guards: {
      // isMorning: (ctx: TimeOfTheDayCtx) => ctx.time.getHours() >= 6 && ctx.time.getHours() <= 12,
      isMorning: (ctx: TimeOfTheDayCtx) => getHours(ctx.time) < 6,
      isAfternoon: (ctx: TimeOfTheDayCtx) => getHours(ctx.time) >= 13 && getHours(ctx.time) <= 18,
    },
  }
)

const Wrapper = styled.div`
  padding: 1rem;
`

const TimeOfTheDay = (): JSX.Element => {
  const [state] = useMachine(timeOfTheDayMachine)
  const meta = state.meta[`timeOfTheDay.${state.value}`]

  return (
    <>
      <Wrapper>
        {" "}
        <p>
          Good {state.value} the time is {getHours(state.context.time)} :{" "}
          {getMinutes(state.context.time) < 10
            ? getMinutes(state.context.time) + "0"
            : getMinutes(state.context.time)}{" "}
        </p>
        <p>{meta}</p>
      </Wrapper>
    </>
  )
}
export default TimeOfTheDay
// always
