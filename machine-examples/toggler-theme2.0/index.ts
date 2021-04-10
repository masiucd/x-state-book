import { createMachine, interpret } from "xstate";

const box = document.getElementById("box") as HTMLElement;
const off = document.getElementById("off") as HTMLElement;
const on = document.getElementById("on") as HTMLElement;
const switchBtn = document.getElementById("switch") as HTMLElement;

const machine = createMachine({
  initial: "hidden",
  states: {
    hidden: {
      on: {
        TURN_ON: "visible.hist",
      },
    },
    visible: {
      initial: "light",
      states: {
        light: {
          on: {
            SWITCH: "dark",
          },
        },
        dark: {
          on: {
            SWITCH: "light",
          },
        },
        hist: {
          type: "history",
        },
      },
      on: {
        TURN_OFF: "hidden",
      },
    },
  },
});

const service = interpret(machine)
  .onTransition(state => {
    const last = state.toStrings()[state.toStrings().length - 1];
    document.body.dataset.theme = last;
    box.dataset.state = state.toStrings()[0];
  })
  .start();

on.addEventListener("click", () => {
  service.send("TURN_ON");
});

off.addEventListener("click", () => {
  service.send("TURN_OFF");
});

switchBtn.addEventListener("click", () => {
  service.send("SWITCH");
});
