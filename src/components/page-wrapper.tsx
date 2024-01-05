import type {PropsWithChildren} from "react";

import {cn} from "@/lib/styles";

type Props = {
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({
  children,
  className,
  fluid,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-page flex-1 flex-col",
        className,
        fluid && "max-w-none"
      )}
    >
      {children}
    </div>
  );
}
