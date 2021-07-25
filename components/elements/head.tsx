import React from "react"
import Head from "next/head"

interface HeadComponentProps {
  title?: string
}
const HeadComponent = ({ title = "x-state" }: HeadComponentProps): JSX.Element => {
  return (
    <Head>
      <title>{title} </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComponent
