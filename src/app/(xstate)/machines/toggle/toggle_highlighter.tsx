"use client"
import Button from "@/components/common/button"
import Highlighter from "@/components/highlighter"
import useToggle from "@/hooks/toggle"

export default function ToggleHighlighter() {
  const codeString = `
  const toggleMachine = createMachine({
    schema: {
      context: {} as {},
      events: {} as {
        type: "TOGGLE"
      },
    },
    tsTypes: {} as import("./machine.typegen").Typegen0,
    id: "toggle",
    initial: "inactive",
    predictableActionArguments: true,
    context: {},
    states: {
      inactive: {
        on: {
          TOGGLE: {
            target: "active",
          },
        },
      },
      active: {
        on: {
          TOGGLE: {
            target: "inactive",
          },
        },
      },
    },
  })
  `
  const [on, {toggle}] = useToggle()
  return (
    <>
      <Button onClick={toggle}>{on ? "Hide" : "Show"} the machine code</Button>
      {on && <Highlighter code={codeString} />}
    </>
  )
}
