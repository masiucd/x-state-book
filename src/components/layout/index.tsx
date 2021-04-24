import styled from "@emotion/styled"
import React from "react"

interface LayoutProps {
  isFluid?: boolean
}

const Page = styled.main<LayoutProps>`
  max-width: ${props => (props.isFluid ? "100%" : "var(--max-width)")};
  margin: 0 auto;
`

const Layout: React.FC<LayoutProps> = ({ children, isFluid }) => {
  return (
    <>
      <Page isFluid={isFluid}>{children}</Page>
    </>
  )
}

export default Layout
