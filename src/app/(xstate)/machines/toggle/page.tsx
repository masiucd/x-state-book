import fs from "node:fs/promises"
import {join} from "node:path"

import CodeHighlighter from "@/components/common/code_highlighter"
import Toggle from "@/components/machines/toggle/app"
import {ABSOLUTE_APP_PATH} from "@/lib/utils/io"
import {MachineType} from "@/lib/utils/types"

export async function getMachineContent(machine: MachineType) {
  try {
    const path = join(
      ABSOLUTE_APP_PATH,
      "src",
      "machines",
      machine,
      "machine.ts"
    )
    const content = await fs.readFile(path, "utf-8")
    return [content, null]
  } catch (error) {
    return [null, "Failed to parse the content"]
  }
}

export default async function ToggleMachinePage() {
  const [content, error] = await getMachineContent("toggle")
  return (
    <div className="flex flex-1 flex-col gap-5 p-2">
      <Toggle />
      {error === null && typeof content === "string" && (
        <CodeHighlighter content={content} />
      )}
    </div>
  )
}
