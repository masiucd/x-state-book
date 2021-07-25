import BgImage from "@components/common/bg-image"
import Title from "@components/common/title"
import Head from "@components/elements/head"
import Layout from "@components/layout"
import {css} from "@emotion/css"
import styled from "@emotion/styled"
import {colorIntentions, common, elements, elevations, sizes} from "@styles/styled-variables"
import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const titleStyles = css`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
    z-index: 1;
    transform: rotate(2deg);
    &::before {
      content: "";
      top: 20px;
      left: 0;
      height: 30%;
      width: 100%;
      background: ${colorIntentions.primary};
      position: absolute;
      opacity: 0.4;
      z-index: -1;
    }
    &::after {
      content: "";
      bottom: 20px;
      left: 0;
      height: 30%;
      width: 100%;
      background: ${colorIntentions.danger};
      position: absolute;
      opacity: 0.4;
      z-index: -1;
    }
  }
  p {
    box-shadow: ${elevations.shadowLg};
    font-size: ${sizes.h5};
  }
`

const linkStyles = css`
  border: 2px solid ${elements.buttonText};
  padding: 0.2rem;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  border-radius: ${common.borderRadiusS};
  cursor: pointer;
`

const PageWrapper = styled.div`
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Home(): JSX.Element {
  return (
    <Layout isFluid>
      <Head title="home" />
      <PageWrapper>
        <Title className={titleStyles}>
          <h1>x-state showcase</h1>
          <Link href="/machines">
            <motion.div className={linkStyles} role="link" whileHover={{scale: 1.1, rotate: 2}}>
              <a>To Machines</a>
              <Image src="/cpu.svg" width={30} height={30} alt="cpu" />
            </motion.div>
          </Link>
        </Title>
      </PageWrapper>
      <BgImage />
    </Layout>
  )
}
