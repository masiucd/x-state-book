import Accordion from "./accordion"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { resetButtonStylesLight } from "@styles/common"

const Wrapper = styled.div`
  position: relative;
  max-height: 55vh;
  overflow-y: scroll;
`

const Button = styled.button`
  ${resetButtonStylesLight}
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export default function AccordionWrapper(): JSX.Element {
  const { state, toggle } = useToggle()
  return (
    <Wrapper>
      <Accordion isTimerSelected={state} />
      <Button onClick={toggle}>{state ? "show counter" : "show timer"}</Button>
    </Wrapper>
  )
}
