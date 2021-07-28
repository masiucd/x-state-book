import styled from "@emotion/styled"
import {FC} from "react"

const StyledPostLayout = styled.section`
  margin: 0.5em auto 2em auto;
  h1,
  h2,
  h3 {
    text-align: center;
    margin-bottom: 0.5em;
  }
`

const PostLayout: FC = ({children}): JSX.Element => {
  return <StyledPostLayout>{children}</StyledPostLayout>
}

export default PostLayout
