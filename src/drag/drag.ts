import { createMachine, assign, interpret } from "xstate";
import "./app.css";
import "./drag.css";

const body = document.body as HTMLBodyElement;
const box = document.getElementById("box") as HTMLDivElement;

interface Context {
  x: number;
  y: number;
  px: number;
  py: number;
  dx: number;
  dy: number;
}

const machine = createMachine<Context, any>({
  initial: "idle",

  context: {
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    px: 0,
    py: 0,
  },
  states: {
    idle: {
      on: {
        mousedown: {
          actions: assign({
            px: (_, event: MouseEvent) => event.clientX,
            py: (_, event: MouseEvent) => event.clientY,
          }),
          target: "dragging",
        },
      },
    },
    dragging: {
      on: {
        mousemove: {
          actions: assign({
            dx: (context, event: MouseEvent) => event.clientX - context.px,
            dy: (context, event: MouseEvent) => event.clientY - context.py,
          }),
        },
        mouseup: {
          actions: assign({
            x: (context: Context) => context.x + context.dx,
            y: (context: Context) => context.y + context.dy,
            dx: 0,
            dy: 0,
            px: 0,
            py: 0,
          }),
          target: "idle",
        },
      },
    },
  },
});

const service = interpret(machine);

service.onTransition(state => {
  if (state.changed) {
    console.log(state.context);
    box.dataset.state = state.value as string;
    box.style.setProperty("--dx", String(state.context.dx));
    box.style.setProperty("--dy", String(state.context.dy));
    box.style.setProperty("--x", String(state.context.x));
    box.style.setProperty("--y", String(state.context.y));
  }
});

service.start();

box.addEventListener("mousedown", service.send);
body.addEventListener("mousemove", service.send);
body.addEventListener("mouseup", service.send);
