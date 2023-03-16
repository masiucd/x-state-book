"use client"

import {AnimatePresence, motion} from "framer-motion"
import {Menu} from "react-feather"

import NavLink from "@/components/common/nav_link"
import useToggle from "@/hooks/toggle"

import {Machine} from "../types"

interface Props {
  machines: Machine[]
}

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 }
// }

// return (
//   <motion.ol
//     variants={container}
//     initial="hidden"
//     animate="show"
//   >
//     <motion.li variants={item} />
//     <motion.li variants={item} />
//   </motion.ol>
// )

export default function MobileNav({machines}: Props) {
  const [isOpen, {toggle}] = useToggle()
  return (
    <nav className="relative flex w-full flex-1 flex-col border border-red-500 sm:hidden">
      <button aria-label="Nav menu button" type="button" onClick={toggle}>
        <Menu />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute top-[120px] right-5 flex flex-col gap-3 rounded-md border border-slate-900/50 bg-slate-50 shadow"
            initial={{opacity: 0.3, y: -100}}
            animate={{
              opacity: 1,
              y: 1,
              transition: {type: "tween", delay: 0.2, duration: 0.3},
            }}
            exit={{opacity: 0.3, y: -100}}
          >
            {machines.map((machine) => (
              <li key={machine.machine}>
                <NavLink href={`/machines/${machine.path}`}>
                  {machine.machine}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
