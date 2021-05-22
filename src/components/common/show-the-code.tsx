import styled from "@emotion/styled"
import { useToggle } from "@hooks/toggle"
import { resetButtonStylesLight } from "@styles/common"
import { AnimatePresence, motion } from "framer-motion"
import React from "react"
// import Highlight from "react-highlight.js"

const Wrapper = styled.div`
  pre {
    white-space: pre-wrap;
    overflow-x: auto;
    tab-size: 4;
    background: #222;
    color: #fff;
    border: none;
    max-height: 45vh;
  }
  pre:hover,
  pre:focus {
    /* width: min-content; */
  }
`
const Button = styled.button`
  ${resetButtonStylesLight}
`

export const ShowTheCode: React.FC = ({ children }): JSX.Element => {
  const { state, toggle } = useToggle()
  return (
    <Wrapper>
      <Button onClick={toggle}>{state ? "Hide" : "Show"} the code</Button>
      <AnimatePresence>
        {state && (
          <motion.div
            className="code-wrapper"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}
