import Accordion from "@components/accordion"
import Head from "@components/elements/head"
import Layout from "@components/layout"
import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { resetButtonStylesLight } from "@styles/common"
import React from "react"

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
