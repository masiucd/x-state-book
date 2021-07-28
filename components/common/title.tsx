import {css, cx} from "@emotion/css"
import React from "react"

interface Props {
  title?: string
  className?: string
}

const titleStyles = css`
  min-width: 35rem;
`

const Title: React.FC<Props> = ({title, children, className}) => {
  return (
    <section className={cx(titleStyles, className)}>
      {title ? <h1>{title}</h1> : null}
      {children}
    </section>
  )
}
export default Title
