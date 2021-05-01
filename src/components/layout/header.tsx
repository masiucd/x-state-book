import styled from "@emotion/styled"
import useMediaQuery from "@hooks/media-query"
import { useToggle } from "@hooks/toggle"
import { above, below } from "@styles/media-query"
import Link from "next/link"
import React from "react"
import Nav from "./nav"
import ToggleIcon from "./toggle-icon"

const StyledHeader = styled.header`
  min-height: 10rem;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
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
  a {
    font-size: 3em;
  }
`

const Header = (): JSX.Element => {
  const { state: isOn, toggle: toggleIsOn } = useToggle()
  const isToggleIconMatched = useMediaQuery(below.tablet)

  return (
    <StyledHeader>
      <TitleWrapper>
        <Link href="/">
          <a>xstate</a>
        </Link>
      </TitleWrapper>
      {isToggleIconMatched && <ToggleIcon isOn={isOn} toggleIsOn={toggleIsOn} />}
      <Nav isOn={isOn} />
    </StyledHeader>
  )
}

export default Header
