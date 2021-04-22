import * as React from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";
import { Wrapper } from "@components/styles/wrappers";

interface CountCtx {
  count: number;
}

type ToggleEvent =
  | {
      type: "TOGGLE";
    }
  | { type: "RESET" };

const countMachine = createMachine<CountCtx, ToggleEvent>({
  id: "counter",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
    active: {
      entry: assign({ count: ctx => ctx.count + 1 }),
      on: {
        TOGGLE: {
          target: "inactive",
        },
        RESET: {
          actions: assign({ count: 0 }),
        },
      },
    },
  },
});

const SimpleCounter = (): JSX.Element => {
  const [state, send] = useMachine(countMachine);
  const active = state.matches("active");

  return (
    <Wrapper>
      <h1>{state.value}</h1>
      <h3>{state.context.count}</h3>
      <button type="button" onClick={() => send("TOGGLE")}>
        {active ? "Now I am Active" : "No I am Inactive"}
      </button>

      {state.context.count > 0 && state.value === "active" && (
        <button type="button" onClick={() => send("RESET")}>
          Reset
        </button>
      )}
    </Wrapper>
  );
};

export default SimpleCounter;
