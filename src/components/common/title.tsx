import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

type ExclusiveProps =
  | {children?: never; title: string}
  | {children: ReactNode; title?: never}

type Props = ExclusiveProps & {
  className?: string
}

function Title({className, children, title}: Props) {
  if (title) {
    return <h1 className={cn("", className)}>{title}</h1>
  }
  return <aside className={cn("px-2 py-4", className)}>{children}</aside>
}

export default Title
