import styled from "@emotion/styled"
import React from "react"

interface LayoutProps {
  fluid?: boolean
}
const Page = styled.main<LayoutProps>`
  max-width: ${porps => (porps.fluid ? "100%" : "900px")};
`

const Layout: React.FC<LayoutProps> = ({ children, fluid }) => {
  return (
    <>
      <Page fluid={fluid}>{children}</Page>
    </>
  )
}

export default Layout
