"use client"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism"

interface Props {
  code: string
  language?: string
  on: boolean
}

function Highlighter({code, language = "typescript", on}: Props) {
  if (on) {
    return (
      <SyntaxHighlighter language={language} style={nord}>
        {code}
      </SyntaxHighlighter>
    )
  }
  return null
}

export default Highlighter
