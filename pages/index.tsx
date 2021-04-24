import Counter from "@components/counter"
import Head from "@components/elements/head"
import Layout from "@components/layout"
import Timer from "@components/timer"

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head title="home" />
      <Counter />
      <Timer />
    </Layout>
  )
}
