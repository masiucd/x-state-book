export type Machine =
  | {
      machine: string
      path: "multi_step_form"
    }
  | {
      machine: string
      path: "toggle"
    }
