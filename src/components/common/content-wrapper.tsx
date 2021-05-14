import { css, cx } from "@emotion/css"
import React from "react"

interface ContentWrapperProps {
  className?: string
}

const styles = css`
  margin-bottom: 0.5em;
  text-align: center;
`

const ContentWrapper: React.FC<ContentWrapperProps> = ({ className, children }) => {
  return <section className={cx(styles, className)}>{children}</section>
}
export default ContentWrapper
