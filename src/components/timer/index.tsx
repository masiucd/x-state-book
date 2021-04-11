import { Wrapper } from "@components/styles/wrappers";
import { css, cx } from "@emotion/css";
import { useToggle } from "@hooks/toggle";
import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import { assign, createMachine } from "xstate";

const decimalButtonStyles = (withDecimals: boolean) => css`
  background-color: ${withDecimals ? "var(--danger)" : "var(--textColor)"};
`;

interface TimeContext {
  duration: number;
  elapsed: number;
  interval: number;
}
type TimeEvent = { type: "TOGGLE" } | { type: "RESET" } | { type: "ADD_MINUTE" } | { type: "TICK" };

const timeMachine = createMachine<TimeContext, TimeEvent>(
  {
    id: "timeMachine",
    initial: "idle",
    context: {
      duration: 60,
      elapsed: 0.1,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: "resetTimer",
        on: {
          TOGGLE: "running",
        },
      },
      running: {
        on: {
          TICK: {
            actions: "tick",
          },
          TOGGLE: "paused",
          ADD_MINUTE: {
            actions: "addMinute",
          },
        },
      },
      paused: {
        on: {
          TOGGLE: "running",
          RESET: "idle",
        },
      },
    },
  },
  {
    actions: {
      addMinute: assign({
        duration: ctx => ctx.duration + 60,
      }),
      resetTimer: assign({ duration: 60, elapsed: 0, interval: 0.1 }),
      tick: assign({
        elapsed: ctx => ctx.elapsed + ctx.interval,
      }),
    },
  }
);

const Timer = (): JSX.Element => {
  const [state, send] = useMachine(timeMachine);
  const { state: withDecimals, toggle } = useToggle();
  const { duration, elapsed, interval } = state.context;

  const isRunning = state.matches("running");
  const isPaused = state.matches("paused");

  useEffect(() => {
    if (state.value === "running") {
      const intervalId = setInterval(() => {
        send("TICK");
      }, interval * 1000);

      return () => clearInterval(intervalId);
    }
  }, [interval, send, state.value]);

  return (
    <Wrapper>
      <h1>Timer</h1>
      <h3>current state {state.value}</h3>
      <button type="button" onClick={toggle} className={cx(decimalButtonStyles(withDecimals))}>
        {withDecimals ? "without decimals" : "width decimals"}
      </button>
      {withDecimals ? (
        <h3>{(duration - elapsed).toFixed(2)}</h3>
      ) : (
        <h3>{Math.ceil(duration - elapsed)}</h3>
      )}

      <button onClick={() => send("TOGGLE")}> {isRunning ? "Stop timer" : "Start timer"} </button>

      {isRunning && (
        <button type="button" onClick={() => send("ADD_MINUTE")}>
          Add an minute
        </button>
      )}

      {isPaused && <button onClick={() => send("RESET")}>reset timer</button>}
    </Wrapper>
  );
};

export default Timer;
