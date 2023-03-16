"use client"

import {AnimatePresence, motion} from "framer-motion"
import {Menu} from "react-feather"

import NavLink from "@/components/common/nav_link"
import useToggle from "@/hooks/toggle"

import {Machine} from "../types"

interface Props {
  machines: Machine[]
}

const container = {
  hidden: {opacity: 0, y: -300},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.6,
    },
  },
}

const item = {
  hidden: {opacity: 0},
  show: {opacity: 1},
}

export default function MobileNav({machines}: Props) {
  const [isOpen, {toggle}] = useToggle()
  return (
    <nav className="relative flex flex-1 flex-col items-end justify-end sm:hidden">
      <button
        aria-label="Nav menu button"
        type="button"
        onClick={toggle}
        className="w-8"
      >
        <Menu />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute top-[40px] right-0 flex w-[8rem] flex-col gap-3 rounded-md bg-slate-50 px-1 py-2 shadow"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {machines.map((machine) => (
              <motion.li key={machine.machine} variants={item}>
                <NavLink href={`/machines/${machine.path}`}>
                  {machine.machine}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
