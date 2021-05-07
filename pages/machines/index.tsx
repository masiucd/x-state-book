import Layout from "@components/layout"
import { GetStaticProps, NextPage } from "next"

import React from "react"

import { getAllPosts } from "../../lib/api"

interface Props {
  allPosts: any
}

const MachinesPage: NextPage<Props> = ({ allPosts }): JSX.Element => {
  // console.log(allPosts)
  return (
    <Layout>
      <h1>Machines</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug", "author", "spoiler", "date"])

  return { props: { allPosts } }
}

export default MachinesPage
