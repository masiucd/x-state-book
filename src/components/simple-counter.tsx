import * as React from "react";
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

interface CountCtx {
  count: number;
}

type ToggleEvent = {
  type: "TOGGLE";
};

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
      },
    },
  },
});

const SimpleCounter = (): JSX.Element => {
  const [current, send] = useMachine(countMachine);
  const active = current.matches("active");

  return (
    <div>
      <h1>{current.context.count}</h1>
      <button type="button" onClick={() => send("TOGGLE")}>
        {active ? "Now I am Active" : "No I am Inactive"}
      </button>
    </div>
  );
};

export default SimpleCounter;
