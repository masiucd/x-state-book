import Counter from "@components/machines/counter"
import Timer from "@components/machines/timer"
import styled from "@emotion/styled"
import {AnimatePresence, motion} from "framer-motion"

interface AccordionProps {
  isTimerSelected: boolean
}

const Wrapper = styled(motion.div)`
  margin: 4rem auto;
`

const Accordion = ({isTimerSelected}: AccordionProps): JSX.Element => (
  <AnimatePresence>
    {isTimerSelected ? (
      <Wrapper layout>
        <Timer />
      </Wrapper>
    ) : (
      <Wrapper layout>
        <Counter />
      </Wrapper>
    )}
  </AnimatePresence>
)
export default Accordion
