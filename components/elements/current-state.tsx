import { css, cx } from "@emotion/css"
import { elements, elevations } from "@styles/styled-variables"
import { StateValue } from "xstate/lib/types"

interface CurrentStateProps {
  stateValue: StateValue
  className?: string
}

const styles = css`
  text-align: center;
  padding: 0.5rem;
  span {
    background-color: ${elements.common};
    color: ${elements.commonText};
    padding: 0.3rem;
    border-radius: 4px;
    box-shadow: ${elevations.shadowLg};
  }
`

const CurrentState = ({ stateValue, className }: CurrentStateProps): JSX.Element => {
  return (
    <div className={cx(styles, className)}>
      <h3>
        {" "}
        Current state <span>{stateValue}</span>
      </h3>
    </div>
  )
}

export default CurrentState
