import Head from "next/head"
import Counter from "@components/counter"

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
    </>
  )
}
