import Accordion from "./accordion"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { resetButtonStylesLight } from "@styles/common"

const Button = styled.button`
  ${resetButtonStylesLight}
  position: fixed;
  bottom: 2rem;
  right: 1rem;
`

export default function AccordionWrapper(): JSX.Element {
  const { state, toggle } = useToggle()
  return (
    <>
      <Accordion isTimerSelected={state} />
      <Button onClick={toggle}>{state ? "show counter" : "show timer"}</Button>
    </>
  )
}
