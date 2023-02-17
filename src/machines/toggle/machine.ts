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
    },
    active: {
      on: {
        TOGGLE: {
          target: "inactive",
        },
      },
    },
  },
})

export type StateType = (typeof toggleMachine)["initialState"]
export default toggleMachine
