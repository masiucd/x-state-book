import {css, cx} from "@emotion/css"
import {above} from "@styles/media-query"
import {ListData} from "@utils/types"
import {motion} from "framer-motion"
import Link from "next/link"

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

const NavList = ({listData, className}: ListProps): JSX.Element => (
  <motion.ul
    layout
    initial={{opacity: 0, y: "-50%"}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: "-50%"}}
    className={cx(navListStyles, className)}
    transition={{duration: 0.4, ease: "easeOut", staggerChildren: 0.2}}
  >
    {listData.map(({name, path}) => (
      <motion.li
        key={name}
        whileHover={{scale: 1.1, opacity: 0.3}}
        css={css`
          text-transform: capitalize;
        `}
      >
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </motion.li>
    ))}
  </motion.ul>
)

export default NavList
