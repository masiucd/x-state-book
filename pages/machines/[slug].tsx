import Layout from "@components/layout"
import { useRouter } from "next/router"
import { Capture } from "@components/common/capture"
import ContentWrapper from "@components/common/content-wrapper"
import ErrorPage from "next/error"
import { GetStaticPaths, GetStaticProps } from "next"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import dynamic from "next/dynamic"

const MachineBySlug = (): JSX.Element => {
  const router = useRouter()

  if (!router.isFallback) return <ErrorPage statusCode={404} />

  return (
    <Layout>
      <ContentWrapper>
        <h1>
          {router.query.slug} with <Capture>x-state</Capture>{" "}
        </h1>
      </ContentWrapper>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fallbackSlug = params?.slug as string
  const post = getPostBySlug(fallbackSlug, ["title", "slug", "author", "spoiler", "date"])

  console.log(post.content)

  return {
    props: {
      ...post,
      content: "",
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default MachineBySlug
