"use client"
import {motion} from "framer-motion"
import {ReactNode} from "react"

import {cn} from "@/lib/utils/styles"

interface Props {
  children: ReactNode
  className?: string
}

export default function AnimatedWrapper({children, className}: Props) {
  return (
    <motion.section
      className={cn("flex-1", className)}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      {children}
    </motion.section>
  )
}
