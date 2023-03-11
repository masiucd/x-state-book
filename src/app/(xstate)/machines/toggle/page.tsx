import fs from "node:fs/promises"
import {join} from "node:path"

import CodeHighlighter from "@/components/common/code_highlighter"
import Toggle from "@/components/machines/toggle/app"

const absoluteAppPath = process.cwd()

type Machine = "toggle" | "multi_step_form"
export async function getMachineContent(machine: Machine) {
  try {
    const path = join(absoluteAppPath, "src", "machines", machine, "machine.ts")
    const content = await fs.readFile(path, "utf-8")
    return [content, null]
  } catch (error) {
    return [null, "Failed to parse the content"]
  }
}

export default async function ToggleMachinePage() {
  const [content, error] = await getMachineContent("toggle")
  return (
    <div className="flex flex-col gap-5">
      <Toggle />
      <div className="px-3">
        {error !== null && typeof content === "string" && (
          <CodeHighlighter content={content} />
        )}
      </div>
    </div>
  )
}
