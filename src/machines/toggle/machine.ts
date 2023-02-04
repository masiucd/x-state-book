import {createMachine} from "xstate"

const toggleMachine = createMachine({
  schema: {
    context: {} as {},
    events: {} as {
      type: "TOGGLE"
    },
  },
  tsTypes: {} as import("./machine.typegen").Typegen0,
  id: "toggle",
  initial: "inactive",
  predictableActionArguments: true,
  context: {},
  states: {
    inactive: {
      on: {
        TOGGLE: {
          target: "active",
        },
      },
      meta: {
        buttonText: "Inactive",
        fn: () => {
          console.log("I am active going to be inactive")
        },
      },
    },
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
      meta: {
        buttonText: "Active",
        fn: () => {
          console.log("I am inactive going to be active")
        },
      },
    },
  },
})

export type StateType = (typeof toggleMachine)["initialState"]
export default toggleMachine
