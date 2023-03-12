import {createMachine} from "xstate"

const multiStepForm = createMachine({
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

export default multiStepForm
