import styled from "@emotion/styled"
import { elements } from "@styles/styled-variables"
import { motion } from "framer-motion"

interface Props {
  isOn: boolean
  toggleIsOn: () => void
}

const StyledToggleIcon = styled(motion.button)`
  background: none;
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  border: none;
  height: 2rem;
  width: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  .part {
    background-color: ${elements.buttonText};
    width: 100%;
    height: 0.27em;
    &:nth-of-type(2) {
      width: 96%;
    }
    &:nth-of-type(3) {
      width: 92%;
    }
  }
`

const ToggleIcon = ({ isOn, toggleIsOn }: Props): JSX.Element => {
  return (
    <StyledToggleIcon
      role="button"
      aria-pressed={isOn}
      aria-label="menu-toggle"
      onClick={toggleIsOn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, top: isOn ? "0.5rem" : "1rem" }}
    >
      <motion.div
        className="part part-1"
        animate={{ scale: isOn ? 0 : 1, opacity: isOn ? 0 : 1, x: isOn ? "1000%" : 0 }}
      />
      <motion.div
        className="part part-2"
        animate={{
          scale: isOn ? 1.145 : 1,
          rotate: isOn ? 120 : 0,
          top: 26,
          position: isOn ? "absolute" : "static",
          width: isOn ? "2rem" : "2.5rem",
        }}
      />
      <motion.div
        className="part part-3"
        animate={{
          scale: isOn ? 1.02 : 1,

          rotate: isOn ? -120 : 0,
          width: isOn ? "2rem" : "2.5rem",
          top: 28,
          position: isOn ? "absolute" : "static",
        }}
      />
    </StyledToggleIcon>
  )
}

export default ToggleIcon
