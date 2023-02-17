"use client"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism"

interface Props {
  code: string
  language?: string
}

function Component({code, language = "typescript"}: Props) {
  return (
    <SyntaxHighlighter language={language} style={nord}>
      {code}
    </SyntaxHighlighter>
  )
}

export default Component
