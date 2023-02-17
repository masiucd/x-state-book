import ToggleApp from "@/components/xstate/toggle/toggle_app"

import ToggleHighlighter from "./toggle_highlighter"

export default function ToggleMachinePage() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Toggle App</h1>
      <div className="px-3">
        <ToggleApp />
        <ToggleHighlighter />
      </div>
    </div>
  )
}
