import { createMachine, interpret } from "xstate";

interface CountCtx {
  count: number;
}

const toggleMachine = createMachine({
  id: "machine",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        click: "active",
      },
    },
    active: {
      on: { click: "inactive" },
    },
  },
});

const service = interpret(toggleMachine).onTransition(state => {
  const { value } = state;
  document.body.dataset.theme = value as string;
});

const darkButton = document.querySelector(".dark");
const lightButton = document.querySelector(".light");

lightButton?.addEventListener("click", e => {
  service.send(e);
});

darkButton?.addEventListener("click", e => {
  service.send(e);
});

service.start();

console.log("hello");
