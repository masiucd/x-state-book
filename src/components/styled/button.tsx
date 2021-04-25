import { css, cx } from "@emotion/css"
import { resetButtonStylesLight } from "@styles/common"
import React from "react"

interface buttonProps {
  className?: string
  onClick?: () => void
  isDisabled?: boolean
}

const styles = css`
  ${resetButtonStylesLight}
`

const button: React.FC<buttonProps> = ({ children, className, onClick, isDisabled }) => {
  return (
    <button type="button" className={cx(styles, className)} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
export default button
