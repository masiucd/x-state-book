import React from "react"
import Counter from "@components/counter"
import Timer from "@components/timer"
import { AnimatePresence, motion } from "framer-motion"
import styled from "@emotion/styled"

interface AccordionProps {
  isTimerSelected: boolean
}

const Wrapper = styled(motion.div)`
  margin: 4rem auto;
`

const Accordion = ({ isTimerSelected }: AccordionProps): JSX.Element => {
  return (
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
}
export default Accordion
