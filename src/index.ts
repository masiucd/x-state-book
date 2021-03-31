import { createMachine, interpret } from "xstate";
import "./app.css";

const main = document.querySelector("main") as HTMLElement;
const h1 = document.createElement("h1") as HTMLHeadingElement;

h1.textContent = "Click the box";
h1.classList.add("point-h1");
main.append(h1);

const box = document.createElement("div");
box.className = "box";
(document.getElementById("root") as HTMLElement).appendChild(box);

const calcPoint = (_ctx: unknown, event: MouseEvent) => {
  box.innerHTML = `<h3>${event.clientX} - ${event.clientY}</h3>`;
  console.log(event);
};
const clearPoint = (_ctx: unknown, event: unknown) => {
  box.innerHTML = "";
};

const machine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        mousedown: {
          target: "active",
          actions: [calcPoint],
        },
      },
    },

    active: {
      on: {
        mouseup: {
          target: "inactive",
          actions: [clearPoint],
        },
      },
    },
  },
});

const service = interpret(machine).onTransition(state => {
  console.log(state.value);

  box.dataset.state = state.value as string;
});

service.start();
box.addEventListener("mousedown", service.send);
box.addEventListener("mouseup", service.send);
