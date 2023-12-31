import {useMDXComponent} from "next-contentlayer/hooks";

import {cn} from "@/lib/styles";

type Props = {
  code: string;
  className?: string;
};

export function Mdx({code, className}: Props) {
  const MDXContent = useMDXComponent(code);
  return (
    <article
      className={cn(
        "prose prose-zinc text-pretty  mx-auto max-w-none prose-a:text-gray-700 prose-a:after:content-[''] prose-a:after:bg-main-500/65   prose-a:after:w-full prose-a:after:h-full prose-a:after:absolute prose-a:after:left-0 prose-a:after:bottom-0 prose-a:relative prose-a:after:-z-10 prose-a:after:rotate-2",
        className
      )}
      // dark:prose-invert
    >
      <MDXContent components={{}} />
    </article>
  );
}
