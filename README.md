# mmasiu-xstate

## Table of Contents

- [About](#about)

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
