import {createMachine} from "xstate";

export let toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
    },
  },
});
