import React from "react"
import Image from "next/image"
import { css, cx } from "@emotion/css"
import { common, elements } from "@styles/styled-variables"

const heroStyles = css`
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 65vh;
`
const childrenStyles = css`
  margin: 0 auto;
  padding: 1em 1.2em;
  color: ${elements.common};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: ${common.borderRadiusS};
`

const imageWrapperStyles = css`
  position: fixed;
  overflow: hidden;
  z-index: -1;
  min-height: 65vh;
  width: 100vw;
`

interface Option {
  width?: number
  height?: number
  src?: string
  alt?: string
}

interface Props {
  className?: string
  classNameForImageWrapper?: string
  classNameForChildren?: string
  options?: Option
}

const Hero: React.FC<Props> = ({
  children,
  className,
  classNameForImageWrapper,
  classNameForChildren,
  options,
}): JSX.Element => {
  return (
    <section className={cx(heroStyles, className)}>
      <div className={cx(imageWrapperStyles, classNameForImageWrapper)}>
        <Image
          alt={options?.alt ? options.alt : "main-hero"}
          src={options?.src ? options.src : "/select.svg"}
          width={options?.width ? options.width : 1200}
          height={options?.height ? options.height : 800}
          layout="responsive"
          // objectFit="contain"
          // objectPosition="center"
        />
      </div>

      <div className={cx(childrenStyles, classNameForChildren)}>{children}</div>
    </section>
  )
}

export default Hero
