import styled from "@emotion/styled"
import { above } from "@styles/media-query"
import React from "react"
import { ListData } from "types"
import Link from "next/link"

const NavListStyles = styled.ul`
  border: 2px solid blue;
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  @media ${above.tabletL} {
    align-items: center;
    width: 100%;
  }
`

interface ListProps {
  listData: ListData[]
}

const NavList = ({ listData }: ListProps): JSX.Element => (
  <NavListStyles>
    {listData.map(({ name, path }) => (
      <li key={name}>
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </NavListStyles>
)

export default NavList
