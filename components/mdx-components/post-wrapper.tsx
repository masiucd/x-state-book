import styled from "@emotion/styled"
import { elements } from "@styles/styled-variables"
import React from "react"

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  max-height: 55vh;
  .about {
  }
`

const PostWrapper: React.FC = ({ children }): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default PostWrapper
