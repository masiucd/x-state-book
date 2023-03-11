import Toggle from "@/components/machines/toggle/app"

import ToggleHighlighter from "./toggle_highlighter"

export default function ToggleMachinePage() {
  return (
    <div className="flex flex-col gap-5">
      <h1>Toggle App</h1>
      <Toggle />
      <div className="px-3">
        <ToggleHighlighter />
      </div>
    </div>
  )
}
