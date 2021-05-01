import styled from "@emotion/styled"
import useMediaQuery from "@hooks/media-query"
import { above, below } from "@styles/media-query"
import React from "react"
import Nav from "./nav"

const StyledHeader = styled.header`
  border: 2px solid red;
  min-height: 10rem;
  display: grid;
  grid-template-columns: 1fr;
  @media ${above.tabletL} {
    grid-gap: 1rem;
    grid-template-columns: 1fr 2fr;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const Header = (): JSX.Element => {
  const isMatched = useMediaQuery(below.tablet)
  return (
    <StyledHeader>
      <TitleWrapper>
        <h3>xstate</h3>
      </TitleWrapper>
      {isMatched && <p>navIcon</p>}
      <Nav />
    </StyledHeader>
  )
}

export default Header
