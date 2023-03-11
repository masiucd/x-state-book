"use client"
import Button from "@/components/common/button"
import Highlighter from "@/components/highlighter"
import useToggle from "@/hooks/toggle"

interface Props {
  content: string
}

export default function CodeHighlighter({content}: Props) {
  const [on, {toggle}] = useToggle()
  return (
    <>
      <Button onClick={toggle}>{on ? "Hide" : "View"} code</Button>
      {on && <Highlighter code={content} on={true} />}
    </>
  )
}
