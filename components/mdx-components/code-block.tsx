import styled from "@emotion/styled"
import Highlight, {defaultProps, Language} from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"

interface Props {
  language?: Language
}

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0 2em 0;
  padding: 0.5em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

const CodeBlock: React.FC<Props> = ({children, language = "tsx"}) => (
  <Highlight
    {...defaultProps}
    theme={theme}
    code={children?.toString() as string}
    language={language}
  >
    {({className, style, tokens, getLineProps, getTokenProps}) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({line, key: i})}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
)
export default CodeBlock
