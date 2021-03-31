import { createMachine } from "xstate";

const elOutput = document.querySelector("#output");

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

const user = {
  name: "masiu",
  company: "etraveli",
  interests: ["piano", "state machines"],
};

output(user);

const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "pending",
      },
    },
    pending: {
      on: {
        RESOLVE: "resolved",
        REJECT: "rejected",
      },
    },
    resolved: {},
    rejected: {},
  },
};

const transition = (state, event) => {
  return machine.states[state]?.on?.[event] || state;
};

output(transition("idle", "FETCH"));
let currentState = machine.initial;

const send = event => {
  const nextState = transition(currentState, event);
  currentState = nextState;
};

window.send = send;
