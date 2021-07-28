import {assign, createMachine} from "xstate"
interface TimerContext {
  duration: number
  elapsed: number
  interval: number
}

type TimerEvents =
  | {type: "TOGGLE"}
  | {type: "TICK"}
  | {type: "ADD_MINUTE"}
  | {type: "ADD_HOUR"}
  | {type: "ADD_SECONDS"}
  | {type: "RESET"}

const timerExpired = (ctx: TimerContext) => ctx.elapsed >= ctx.duration

const timeMachine = createMachine<TimerContext, TimerEvents>(
  {
    id: "timeMachine",
    initial: "idle",
    context: {
      duration: 5,
      elapsed: 0,
      interval: 0.1,
    },
    states: {
      idle: {
        entry: ["resetTimer"],
        on: {
          TOGGLE: {
            target: "running",
          },
        },
      },
      running: {
        always: {
          target: "expired",
          cond: timerExpired,
        },
        on: {
          TICK: {
            actions: ["tick"],
          },
          TOGGLE: {
            target: "paused",
          },
          ADD_HOUR: {
            actions: "addHour",
          },
          ADD_MINUTE: {
            actions: "addMinute",
          },
          ADD_SECONDS: {
            actions: "addSeconds",
          },
        },
      },
      paused: {
        on: {
          TOGGLE: {
            target: "running",
          },
          RESET: {
            target: "idle",
          },
        },
      },
      expired: {
        always: {
          target: "idle",
        },
      },
    },
  },
  {
    actions: {
      resetTimer: assign({
        duration: 5,
        elapsed: 0,
        interval: 0.1,
      }),
      tick: assign({
        elapsed: ctx => ctx.elapsed + ctx.interval,
      }),
      addMinute: assign({
        duration: ctx => ctx.duration + 60,
      }),
      addHour: assign({
        duration: ctx => ctx.duration + 3600,
      }),
      addSeconds: assign({
        duration: ctx => ctx.duration + 30,
      }),
    },
  }
)

export default timeMachine
