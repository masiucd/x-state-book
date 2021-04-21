# X-State sandbox

## Table of Contents

- [About](#about)
- [Assign](#assign)
- [State](#state)
- [Actions](#actions)
- [Final](#final)

## About <a name = "about"></a>

State machines and X-state with `javascript/typescript`.

Simple example of a toggle `machine`.
You could see your machine as a pure blueprint, like a pure `class`.
The `interpret` function works like a singleton that only creates one instance of the class.

```js
import { createMachine, interpret } from "xstate";

const elBox = document.querySelector("#box");

// blueprint to use and create instances of
const machine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        mousedown: {
          target: "active",
        },
      },
    },
    active: {
      on: {
        mouseup: {
          target: "inactive",
        },
      },
    },
  },
});

// like a singleton
const service = interpret(machine).onTransition(state => {
  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener("mousedown", event => {
  service.send(event);
});

elBox.addEventListener("mouseup", event => {
  service.send(event);
});
```

![image](/n.svg)
![image](/x.gif)

## Assign <a name="assign></a>

When you working with `context` in your state machine, the assign function is what you want to use when update the context object.
Context is a pure function that returns a new context object.

```js
   actions: assign({
    // increment the current count by the event value
    count: (context, event) => context.count + event.value,
    // assign static value to the message (no function needed)
    message: 'Count changed'
  }),
```

## State <a name="state"></a>

Two important properties ont the state object, we have `state.value` that shows us the `finite state` and `state.context` shows us the extended state

## Actions <a name="actions"></a>

actions is our function that will cause some kind of side effect in our machine, either update the context or perhaps trigger some `DOM` event.
One approach that I like is to define the actions as object in our `machine`.
Then we could have a much generic machine where we can change the logic.

```jsx
import { createMachine, assign } from "xstate";
import { useMachine } from "@xstate/react";

export const timerMachine = createMachine(
  {
    initial: "idle",
    context: {
      duration: 60,
      elapsed: 0,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: assign({
          duration: 60,
          elapsed: 0,
        }),
        on: {
          TOGGLE: "running",
        },
      },
      running: {
        on: {
          TOGGLE: "paused",
          ADD_MINUTE: {
            actions: "incrementCount",
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
      incrementCount: assign({
        duration: context => context.duration + 60,
      }),
    },
  }
);

export const Timer = () => {
  const [state, send] = useMachine(timerMachine, {
    actions: {
      incrementCount: assign({
        duration: context => context.duration + 1,
      }),
    },
  });

  return (
    <div
      className="timer"
      data-state={state.value}
      style={{
        "--duration": state.context.duration,
        "--elapsed": state.context.elapsed,
        "--interval": state.context.interval,
      }}
    >
      <header>
        <h1>Exercise 02</h1>
      </header>
      <ProgressCircle />
      <div className="display">
        <div className="label">{state.value}</div>
        <div className="elapsed" onClick={() => send({ type: "TOGGLE" })}>
          {Math.ceil(state.context.duration - state.context.elapsed)}
        </div>
        <div className="controls">
          {state.value !== "running" && <button onClick={() => send("RESET")}>Reset</button>}

          <button onClick={() => send("ADD_MINUTE")}>+ 1:00</button>
        </div>
      </div>
      <div className="actions">
        {state.value === "running" && (
          <button onClick={() => send({ type: "TOGGLE" })} title="Pause timer">
            <FontAwesomeIcon icon={faPause} />
          </button>
        )}

        {(state.value === "paused" || state.value === "idle") && (
          <button onClick={() => send({ type: "TOGGLE" })} title="Start timer">
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}
      </div>
    </div>
  );
};
```

## [Final](name="#final")

When we are done with a state we can use the `final` property.
This is a case to use `onDone` as well. `onDone` will only run as soon we hit the `final` state.
To we can for example transition to another state within the `onDone` property.
