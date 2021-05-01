import { above } from "@styles/media-query"
import React from "react"
import { ListData } from "@utils/types"
import Link from "next/link"
import { css, cx } from "@emotion/css"
import { motion } from "framer-motion"

const navListStyles = css`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  @media ${above.tabletL} {
    align-items: center;
    width: 100%;
  }
`

interface ListProps {
  listData: ListData[]
  className?: string
}

const NavList = ({ listData, className }: ListProps): JSX.Element => (
  <motion.ul
    layout
    initial={{ opacity: 0, y: "-50%" }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: "-50%" }}
    className={cx(navListStyles, className)}
    transition={{ duration: 0.4, ease: "easeOut", staggerChildren: 0.2 }}
  >
    {listData.map(({ name, path }) => (
      <li key={name}>
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </motion.ul>
)

export default NavList
