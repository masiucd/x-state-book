"use client"
import {useMDXComponent} from "next-contentlayer/hooks"
import {ReactNode} from "react"

interface Props {
  code: string
}

const Title = ({children}: {children: ReactNode}) => <h1>{children}</h1>

const components = {
  Title,
}

function Mdx({code}: Props) {
  console.log("code", code)
  const Component = useMDXComponent(code)
  return (
    <article>
      <Component components={{...components}} />
    </article>
  )
}

export default Mdx
