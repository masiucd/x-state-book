import {PropsWithChildren} from "react";

import {cn} from "@/lib/styles";

type Props = {
  className?: string;
};

export function H1({children, className}: PropsWithChildren<Props>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({children, className}: PropsWithChildren<Props>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({children, className}: PropsWithChildren<Props>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function H4({children, className}: PropsWithChildren<Props>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function BlockQuote({children, className}: PropsWithChildren<Props>) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic ", className)}>
      {children}
    </blockquote>
  );
}

export function Paragraph({children, className}: PropsWithChildren<Props>) {
  return <p className={cn("leading-7 ", className)}>{children}</p>;
}

export function List({children, className}: PropsWithChildren<Props>) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function InlineCode({children, className}: PropsWithChildren<Props>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
}

export function Lead({children, className}: PropsWithChildren<Props>) {
  return (
    <p className={cn("text-xl text-gray-500/80", className)}>{children}</p>
  );
}
