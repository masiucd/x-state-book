import styled from "@emotion/styled"
import { above } from "@styles/media-query"
import React from "react"

// interface Props {}

const NavListStyles = styled.ul`
  border: 2px solid blue;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  @media ${above.tabletL} {
    align-items: center;
    width: 100%;
  }
`

const NavList = (): JSX.Element => {
  return (
    <NavListStyles>
      <li>About</li>
      <li>Machine states</li>
      <li>Contact</li>
    </NavListStyles>
  )
}

export default NavList
