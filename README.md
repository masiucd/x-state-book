# X-State sandbox

## Table of Contents

- [About](#about)
- [Assign](#assign)
- [State](#state)
- [Actions](#actions)
- [Final](#final)
- [Transition from child to parent](#transition_from_child_to_parent)
- [invoke](#invoke)

## About <a name = "about"></a>

State machines and X-state with `javascript/typescript`.

Simple example of a toggle `machine`.
You could see your machine as a pure blueprint, like a pure `class`.
The `interpret` function works like a singleton that only creates one instance of the class.

```js
import { createMachine, interpret } from "xstate"

const elBox = document.querySelector("#box")

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
})

// like a singleton
const service = interpret(machine).onTransition(state => {
  elBox.dataset.state = state.value
})

service.start()

elBox.addEventListener("mousedown", event => {
  service.send(event)
})

elBox.addEventListener("mouseup", event => {
  service.send(event)
})
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
import { createMachine, assign } from "xstate"
import { useMachine } from "@xstate/react"

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
)

export const Timer = () => {
  const [state, send] = useMachine(timerMachine, {
    actions: {
      incrementCount: assign({
        duration: context => context.duration + 1,
      }),
    },
  })

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
  )
}
```

## [Final](#final)

When we are done with a state we can use the `final` property.
This is a case to use `onDone` as well. `onDone` will only run as soon we hit the `final` state.
To we can for example transition to another state within the `onDone` property.

## [Transitions From Child to parent](#transition_from_child_to_parent)

There are different ways to handle how we could transition from a child state to a parent state.
One way is to target the parent id with the `#`symbol.

```js
export const timerMachine = createMachine({
  id: "timer",
  initial: "idle",
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  },
  states: {
    idle:{
      id: "idle"
      // some logic
    },
    active:{
      states:{
        child: {
          on :{
            TO_IDLE:{
              target: "#idle"
            }
          }
        }
      }
    },
    paused:{},
  }

```

Another approach is to use `final states` which I try to use instead of targeting the id of the parent state.
Then on the parent state we can add a `onDone` property that will trigger when we hit a `final` state

```js
export const timerMachine = createMachine({
  id: "timer",
  initial: "idle",
  context: {
    duration: 60,
    elapsed: 0,
    interval: 0.1,
  },
  states: {
    idle:{
      // some logic
    },
    active:{
      states:{
        overTime:{
          after:{
            2000: 'timeOver'
          }
          on :{
            TOGGLE: undefined
          }
        },
        timeOver:{
          type:"final"
        },
      }
      onDone:"idle" // we go back to idle when we hit a final state
    },
    paused:{},
  }
})

```

## [Invoke](#invoke)

With in the invoke property we can run fetch calls, callbacks, or even direct to another machine.
`src` takes a function with `context and event` where you can run your logic, for example a `promise`.
If everything goes right you have the `onDone` property that you could use to transition to another state.
For handling errors we use the `onError` property.

## [Actors](#actors)

![actors-model](actors.svg)
Works like smaller individually states. Actors are very common if you are coming from a `micro-service` architecture.
[Actors model in 10min](https://www.brianstorti.com/the-actor-model/)
`Actors` sends events to each other both front and back. An `actors` local state is private, unless we want to share the state with other actors by sending the state as an event.

### Three things is happening when us actors.

- A finite number of messages can be sent to other actors.
- A finite number of new actors can be created
- The local state of the actor might be changed depending on what we do.
