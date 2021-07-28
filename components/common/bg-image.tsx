import styled from "@emotion/styled"
import Image from "next/image"
import {useEffect, useState} from "react"

const Box = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  opacity: 0.6;
`

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window
  return {width, height}
}

const BgImage = () => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const {width, height} = getWindowDimensions()
    setWidth(width)
    setHeight(height)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const {width, height} = getWindowDimensions()
      setWidth(width)
      setHeight(height)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  if (width && height) {
    return (
      <Box>
        <Image src="/select.svg" width={width} height={height} alt="select" />
      </Box>
    )
  }
  return null
}

export default BgImage
