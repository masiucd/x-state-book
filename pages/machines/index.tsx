import Layout from "@components/layout"
import PostItem from "@components/post/post-item"
import styled from "@emotion/styled"
import { Field } from "@utils/types"
import { GetStaticProps, NextPage } from "next"
import React from "react"
import { getAllPosts } from "../../lib/api"

interface Props {
  allPosts: Field[]
}

const PostGrid = styled.ul`
  display: grid;
`

const MachinesPage: NextPage<Props> = ({ allPosts }): JSX.Element => (
  <Layout>
    <h1>Machines</h1>
    <PostGrid>
      {allPosts.map(post => (
        <PostItem key={post.title} post={post} />
      ))}
    </PostGrid>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug", "author", "spoiler", "date"])

  return { props: { allPosts } }
}

export default MachinesPage
