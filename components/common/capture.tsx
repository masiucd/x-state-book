import { css, cx } from "@emotion/css"
import { colorIntentions, elevations } from "@styles/styled-variables"
import React from "react"

const styles = css`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    background-color: ${colorIntentions.danger};
    opacity: 0.45;
    width: 100%;
    height: 0.6rem;
    transform: rotate(2deg);
    box-shadow: ${elevations.shadowLg};
    z-index: -1;
  }
`

interface Props {
  className?: string
}

export const Capture: React.FC<Props> = ({ className, children }): JSX.Element => {
  return <span className={cx(styles, className)}>{children}</span>
}
