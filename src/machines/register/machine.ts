import {createMachine} from "xstate"

export const registerMachine = createMachine({
  id: "register",
  initial: "selectOption",
  context: {
    firstName: "",
    lastName: "",
    age: 0,
  },
  states: {
    selectOption: {
      on: {
        NEXT: {
          target: "personalInfo",
        },
      },
    },
    personalInfo: {
      //
    },
  },
})
