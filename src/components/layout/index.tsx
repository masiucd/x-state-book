import styled from "@emotion/styled"
import GlobalStyles from "@styles/global-styles"
import { sizes } from "@styles/styled-variables"
import React from "react"
import Header from "./header"

interface LayoutProps {
  isFluid?: boolean
}

const Page = styled.main<LayoutProps>`
  max-width: ${props => (props.isFluid ? "100%" : sizes.maxWidth)};
  margin: 0 auto;
`

const Layout: React.FC<LayoutProps> = ({ children, isFluid }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Page isFluid={isFluid}>{children}</Page>
    </>
  )
}

export default Layout
