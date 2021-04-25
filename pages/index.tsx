import Counter from "@components/counter"
import Head from "@components/elements/head"
import Layout from "@components/layout"
import Timer from "@components/timer"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { resetButtonStylesLight } from "@styles/common"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"

interface AccordionProps {
  isTimerSelected: boolean
}

const AnimatedWrapper = styled(motion.div)`
  margin: 4rem auto;
`

// TODO: Separate component and make more generic
const Accordion = ({ isTimerSelected }: AccordionProps) => {
  return (
    <AnimatePresence>
      {isTimerSelected ? (
        <AnimatedWrapper layout>
          <Timer />
        </AnimatedWrapper>
      ) : (
        <AnimatedWrapper layout>
          <Counter />
        </AnimatedWrapper>
      )}
    </AnimatePresence>
  )
}

const Button = styled.button`
  ${resetButtonStylesLight}
  position: absolute;
  bottom: 3rem;
  left: 3rem;
`

export default function Home(): JSX.Element {
  const { state, toggle } = useToggle()
  return (
    <Layout>
      <Head title="home" />
      <Accordion isTimerSelected={state} />
      <Button onClick={toggle}>{state ? "show counter" : "show timer"}</Button>
    </Layout>
  )
}
