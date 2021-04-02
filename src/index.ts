import { createMachine, assign, interpret } from "xstate";
import "./app.css";
import "./drag.css";

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
      },
    },
  },
});

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
