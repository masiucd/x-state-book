import { createMachine } from "xstate";

const feedBackMachine = createMachine({
  initial: "question",
  states: {
    question: {
      on: {
        CLICK_GOOD: "thanks",
      },
    },
    form: {
      on: {
        CLICK: {
          target: "question",
        },
      },
    },
    thanks: {},
    closed: {},
  },
});

console.log(feedBackMachine.initialState);

const clickGoodEvent = {
  type: "CLICK_GOOD",
};

const nextState = feedBackMachine.transition(feedBackMachine.initialState, clickGoodEvent);
console.log(nextState);
