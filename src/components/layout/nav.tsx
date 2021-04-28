import styled from "@emotion/styled"
import { above } from "@styles/media-query"
import React from "react"
import NavList from "./nav-list"

interface Props {}

const Navbar = styled.nav`
  border: 2px solid #333;
  padding: 0.5rem;
  display: flex;
  @media ${above.tabletL} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`
const Nav = (): JSX.Element => {
  return (
    <Navbar>
      <p>nav</p>
      <NavList />
    </Navbar>
  )
}

export default Nav
