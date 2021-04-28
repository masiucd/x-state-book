import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { css, cx } from "@emotion/css"

type ValueProp = string | boolean | number
type MotionConfigType = ValueProp | { [key: string]: MotionConfigType } | MotionConfigType[]

interface AnimatedWrapperProps {
  isAnimating: boolean
  animatePresenceOptions?: Record<string, boolean>
  className?: string
  motionConfig?: MotionConfigType
}

const styles = css`
  margin: 4rem auto;
`

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  isAnimating,
  children,
  className,
}): JSX.Element => {
  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.section layout className={cx(styles, className)}>
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default AnimatedWrapper
