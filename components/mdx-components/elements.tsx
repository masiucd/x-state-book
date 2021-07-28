import styled from "@emotion/styled"
import { elements } from "@styles/styled-variables"

export const Block = styled.div``
export const About = styled.aside`
  min-height: 55vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${elements.common};
  padding-left: 0.5rem;
`
