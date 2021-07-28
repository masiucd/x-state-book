import AccordionWrapper from "@components/accordian"
import {Capture} from "@components/common/capture"
import ContentWrapper from "@components/common/content-wrapper"
import Layout from "@components/layout"
import FetchData from "@components/machines/fetch-data"
import CodeBlock from "@components/mdx-components/code-block"
import {About, Block} from "@components/mdx-components/elements"
import PostLayout from "@components/mdx-components/post-layout"
import styled from "@emotion/styled"
import {elements} from "@styles/styled-variables"
import {FrontMatterData} from "@utils/types"
import fs from "fs"
import matter from "gray-matter"
import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import Link from "next/link"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
// import dynamic from "next/dynamic"
import path from "path"

import {POSTS_PATH, postsFilePath} from "../../lib/api"

interface MdxData {
  compiledSource: string
  scope: FrontMatterData
}
interface Props {
  source: MDXRemoteSerializeResult<Record<string, MdxData>>
  frontMatter: FrontMatterData
  postsTitles: string[]
}

const components = {
  FetchData,
  AccordionWrapper,
  Block,
  About,
  code: CodeBlock,
}

const MachineBySlug: NextPage<Props> = ({source, frontMatter, postsTitles}): JSX.Element => {
  const {title, slug} = frontMatter

  const currentPostIndex = postsTitles.indexOf(slug)
  const nextPost = postsTitles[currentPostIndex + 1]
  const prevPostPost = postsTitles[currentPostIndex - 1]

  return (
    <Layout>
      <ContentWrapper>
        <h1>
          {title} with <Capture>x-state</Capture>{" "}
        </h1>
      </ContentWrapper>
      <PostLayout>
        <MDXRemote {...source} components={components} />

        <StyledMachineNavigation>
          {prevPostPost ? (
            <Link href={`/machines/${prevPostPost}`}>
              <a>{prevPostPost}</a>
            </Link>
          ) : (
            <button disabled>no prev post</button>
          )}

          {nextPost ? (
            <Link href={`/machines/${nextPost}`}>
              <a>{nextPost}</a>
            </Link>
          ) : (
            <button disabled>no next post</button>
          )}
        </StyledMachineNavigation>
      </PostLayout>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug ?? ""}.mdx`)
  const postSource = fs.readFileSync(postFilePath)
  const postsTitles = fs.readdirSync(path.join(POSTS_PATH)).map(path => path.replace(/\.mdx$/, ""))

  const {data: frontMatter, content} = matter(postSource)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter,
      postsTitles,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsFilePath
    .map(path => path.replace(/\.mdx?$/, ""))
    .map(slug => ({params: {slug}}))

  return {paths, fallback: false}
}

export default MachineBySlug

const StyledMachineNavigation = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  a,
  button {
    font-size: 1.2rem;
    border: 2px solid ${elements.common};
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 4px;
  }
  button {
    opacity: 0.3;
    background-color: ${elements.linkColor};
    color: ${elements.bg};
    cursor: not-allowed;
  }
`
