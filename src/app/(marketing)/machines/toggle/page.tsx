import {Code} from "bright";
import {notFound} from "next/navigation";

import {Mdx} from "@/components/mdx";
import {H1, Paragraph} from "@/components/typography";
import {readContent} from "@/lib/fs";
import {getPathPartOrDefault, getPost} from "@/lib/posts";

import Toggle from "./toggle";

export default async function TogglePage() {
  let title = getPathPartOrDefault("toggle");
  let post = getPost(title);
  if (!post) {
    notFound();
  }

  let machineContent = await readContent(["toggle", "machine.ts"]);

  return (
    <div className="flex-1">
      <div className="my-10 flex flex-col gap-2">
        <H1>Toggle</H1>
        <Paragraph>
          A simple toggle machine that can be used to toggle between two states.
        </Paragraph>
      </div>
      <Toggle />
      <section className="">
        <Code lineNumbers theme="github-dark" lang="ts">
          {machineContent}
        </Code>
        <Mdx code={post.body.code} />
      </section>
    </div>
  );
}
