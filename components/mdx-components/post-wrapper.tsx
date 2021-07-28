import styled from "@emotion/styled"
// import { elements } from "@styles/styled-variables"
import React from "react"

const Wrapper = styled.section`
  max-height: 55vh;
`

const PostWrapper: React.FC = ({children}): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default PostWrapper
