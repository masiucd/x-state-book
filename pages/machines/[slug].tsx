import Layout from "@components/layout"
import { Capture } from "@components/common/capture"
import ContentWrapper from "@components/common/content-wrapper"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { POSTS_PATH, postsFilePath } from "../../lib/api"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
// import dynamic from "next/dynamic"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { FrontMatterData } from "@utils/types"
import FetchData from "@components/machines/fetch-data"
import AccordionWrapper from "@components/accordian"
import PostLayout from "@components/mdx-components/post-layout"

interface MdxData {
  compiledSource: string
  scope: FrontMatterData
}
interface Props {
  source: MDXRemoteSerializeResult<Record<string, MdxData>>
  frontMatter: FrontMatterData
}

const components = {
  FetchData,
  AccordionWrapper,
}

const MachineBySlug: NextPage<Props> = ({ source, frontMatter }): JSX.Element => {
  const { title } = frontMatter

  return (
    <Layout>
      <ContentWrapper>
        <h1>
          {title} with <Capture>x-state</Capture>{" "}
        </h1>
      </ContentWrapper>
      <PostLayout>
        <MDXRemote {...source} components={components} />
      </PostLayout>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug ?? ""}.mdx`)
  const postSource = fs.readFileSync(postFilePath)
  const { data: frontMatter, content } = matter(postSource)

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
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsFilePath
    .map(path => path.replace(/\.mdx?$/, ""))
    .map(slug => ({ params: { slug } }))

  return { paths, fallback: false }
}

export default MachineBySlug
