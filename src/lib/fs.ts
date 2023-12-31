import fs from "node:fs/promises";
import {join} from "node:path";

export async function readContent(machinesPath: string[]) {
  let path = join(
    process.cwd(),
    "src",
    "app",
    "(marketing)",
    "machines",
    ...machinesPath
    // "toggle",
    // "machine.ts"
  );

  try {
    return await fs.readFile(path, "utf-8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return null;
  }
}
