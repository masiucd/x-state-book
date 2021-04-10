import { createMachine, interpret } from "xstate";
import "./app.css";

<<<<<<< HEAD
const count = document.querySelector(".count") as HTMLHeadElement;

interface Ctx {
  count: 0;
}

const machine = createMachine({
  id: "counter",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: {
        click: { target: "active" },
      },
    },
    active: {
      entry: assign({
        count: ({ count }, event: any) =>
          event.target.className === "add" ? count + 1 : count - 1,
      }),

      on: {
        click: { target: "inactive" },
=======
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
>>>>>>> 94e804587bf5beedd12107a1999a35144a39b024
      },
    },
  },
});

<<<<<<< HEAD
const service = interpret(machine);
service.onTransition(state => {
  if (state.changed) {
    const { context } = state;
    count.innerHTML = (context as Ctx).count.toString();
  }
});

document.querySelector(".add")?.addEventListener("click", service.send);
document.querySelector(".sub")?.addEventListener("click", service.send);

service.start();
=======
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
>>>>>>> 94e804587bf5beedd12107a1999a35144a39b024
