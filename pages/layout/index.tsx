import styled from "@emotion/styled"
import { sizes } from "@styles/styled-variables"
import React from "react"

interface LayoutProps {
  fluid?: boolean
}
const Page = styled.main<LayoutProps>`
  max-width: ${props => (props.fluid ? "100%" : sizes.maxWidth)};
`

const Layout: React.FC<LayoutProps> = ({ children, fluid }) => {
  return (
    <>
      <Page fluid={fluid}>{children}</Page>
    </>
  )
}

export default Layout
