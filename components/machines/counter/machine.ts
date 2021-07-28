import { assign, createMachine } from "xstate"
interface CountCtx {
  count: number
}

type CountMachineEvents =
  | { type: "ON" }
  | { type: "OFF" }
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }

const counterMachine = createMachine<CountCtx, CountMachineEvents>(
  {
    id: "counterMachine",
    initial: "inactive",
    context: {
      count: 0,
    },
    states: {
      inactive: {
        entry: ["resetCount"],
        on: {
          ON: {
            target: "active",
          },
        },
      },
      active: {
        on: {
          OFF: {
            target: "inactive",
          },
          INCREMENT: {
            actions: ["incrementCount"],
          },
          DECREMENT: {
            actions: ["decrementCount"],
          },
          RESET: {
            actions: ["resetCount"],
          },
        },
      },
    },
  },
  {
    actions: {
      incrementCount: assign({
        count: (ctx: CountCtx) => ctx.count + 1,
      }),
      decrementCount: assign({
        count: (ctx: CountCtx) => ctx.count - 1,
      }),
      resetCount: assign({
        count: 0,
      }),
    },
  }
)

export default counterMachine
