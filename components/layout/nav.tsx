import {css} from "@emotion/css"
import styled from "@emotion/styled"
import useMediaQuery from "@hooks/media-query"
import {above, below} from "@styles/media-query"
import {elements} from "@styles/styled-variables"
import {AnimatePresence} from "framer-motion"

import {ListData} from "../../utils/types"
import NavList from "./nav-list"

const navDataList: ListData[] = [
  {name: "about", path: "/about"},
  {name: "machines", path: "/machines"},
  {name: "contact", path: "/contact"},
]

const socialMediaList: ListData[] = [
  {name: "twitter", path: "https://twitter.com/masiu_cd"},
  {name: "github", path: "https://github.com/masiucd"},
]

interface Props {
  isOn: boolean
}

const Navbar = styled.nav`
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  border-bottom: 1px solid ${elements.common};
  @media ${above.tabletL} {
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }
`

const mobileListStyles = css`
  background: ${elements.common};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 12em;
  display: flex;
  flex-direction: column;
  li {
    a {
      color: ${elements.commonText};
    }
  }
`

const Nav = ({isOn}: Props): JSX.Element => {
  const isMatched = useMediaQuery(above.tablet)
  const isMobileMenuMatched = useMediaQuery(below.tablet)
  const shouldRenderMobileList = isMobileMenuMatched && isOn
  return (
    <Navbar>
      {isMatched && <NavList listData={navDataList} />}
      <NavList listData={socialMediaList} />
      <AnimatePresence exitBeforeEnter>
        {shouldRenderMobileList && <NavList listData={navDataList} className={mobileListStyles} />}
      </AnimatePresence>
    </Navbar>
  )
}

export default Nav
