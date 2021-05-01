import styled from "@emotion/styled"
import useMediaQuery from "@hooks/media-query"
import { above } from "@styles/media-query"
import React from "react"
import { ListData } from "types"
import NavList from "./nav-list"

const navDataList: ListData[] = [
  { name: "about", path: "/about" },
  { name: "machines", path: "/machines" },
  { name: "contact", path: "/contact" },
]

const socialMediaList: ListData[] = [
  { name: "twitter", path: "" },
  { name: "github", path: "" },
]

const Navbar = styled.nav`
  border: 2px solid #333;
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  @media ${above.tabletL} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`
const Nav = (): JSX.Element => {
  const isMatched = useMediaQuery(above.tablet)
  return (
    <Navbar>
      {isMatched && <NavList listData={navDataList} />}
      <NavList listData={socialMediaList} />
    </Navbar>
  )
}

export default Nav
