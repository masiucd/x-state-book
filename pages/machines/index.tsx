import ContentWrapper from "@components/common/content-wrapper"
import Layout from "@components/layout"
import PostItem from "@components/post/post-item"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { Post } from "@utils/types"
import { GetStaticProps, NextPage } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { postsFilePath, POSTS_PATH } from "../../lib/api"

interface Props {
  allPosts: Post[]
}

const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 1.2rem;
`

const titleStyles = css`
  margin: 1.5em 0;
  text-align: center;
`

const MachinesPage: NextPage<Props> = ({ allPosts }): JSX.Element => (
  <Layout>
    <ContentWrapper className={titleStyles}>
      <h1>Machines concepts</h1>
    </ContentWrapper>
    <PostGrid>
      {allPosts.map(post => (
        <PostItem key={post.data.title} post={post} />
      ))}
    </PostGrid>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = postsFilePath.map(postPath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, postPath))
    const { content, data } = matter(source)
    return { content, data, postPath }
  })

  return { props: { allPosts } }
}

export default MachinesPage
