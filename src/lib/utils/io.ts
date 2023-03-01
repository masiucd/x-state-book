import fs from "node:fs/promises"
import {join} from "node:path"

export const absoluteAppPath = process.cwd()

export async function getMachineDirs() {
  const directories: string[] = []
  const path = join(absoluteAppPath, "src", "app", "(xstate)", "machines")
  try {
    const files = await fs.readdir(path)
    for (const file of files) {
      directories.push(file)
    }
  } catch (err) {
    console.error(err)
  }

  return directories
}
