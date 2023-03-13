import fs from "node:fs/promises"
import {join} from "node:path"

export const ABSOLUTE_APP_PATH = process.cwd()

export async function getMachineDirs() {
  const directories: string[] = []
  const path = join(ABSOLUTE_APP_PATH, "src", "app", "(xstate)", "machines")
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
