import fs from "node:fs/promises";
import {join} from "node:path";

import {Code} from "bright";

import {H1, Paragraph} from "@/components/typography";

import Toggle from "./toggle";

async function readContent() {
  let path = join(
    process.cwd(),
    "src",
    "app",
    "(marketing)",
    "machines",
    "toggle",
    "machine.ts"
  );

  try {
    return await fs.readFile(path, "utf-8");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("error", error);
    return null;
  }
}

export default async function TogglePage() {
  let machineContent = await readContent();
  return (
    <div className="flex-1">
      <H1>Toggle</H1>
      <Toggle />
      <Code lineNumbers theme="github-dark" lang="ts">
        {machineContent}
      </Code>
    </div>
  );
}
