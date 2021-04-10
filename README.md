# X-State sandbox

## Table of Contents

- [About](#about)
- [Assign](#assign)
- [State](#state)

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

## State <a name="state"></a

Two important properties ont the state object, we have `state.value` that shows us the `finite state` and `state.context` shows us the extended state
