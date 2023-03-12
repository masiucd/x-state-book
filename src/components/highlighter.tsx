"use client"
import {AnimatePresence, motion, Variants} from "framer-motion"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism"

import {cn} from "@/lib/utils/styles"

interface Props {
  code: string
  language?: string
  on: boolean
  className?: string
}

const SyntaxHighlighterWrapper = motion(SyntaxHighlighter, {
  forwardMotionProps: true,
})

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.3,
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      type: "spring",
      damping: 70,
      stiffness: 200,
    },
  },
}

function Highlighter({code, language = "typescript", on, className}: Props) {
  return (
    <AnimatePresence>
      {on && (
        <motion.div
          className={cn("sm:px-40", className)}
          key="code"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{duration: 0.3}}
        >
          <SyntaxHighlighterWrapper language={language} style={nord}>
            {code}
          </SyntaxHighlighterWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Highlighter
