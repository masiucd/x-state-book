import styled from "@emotion/styled"
import { above } from "@styles/media-query"
import React from "react"
import Nav from "./nav"

const StyledHeader = styled.header`
  border: 2px solid red;
  min-height: 10rem;
  display: grid;
  @media ${above.tabletL} {
    grid-gap: 1rem;
    grid-template-columns: 1fr 2fr;
  }
`

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <h1>header</h1>
      <Nav />
    </StyledHeader>
  )
}

export default Header
