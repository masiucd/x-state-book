import { Capture } from "@components/common/capture"
import styled from "@emotion/styled"
import { colorIntentions, elevations } from "@styles/styled-variables"
import { Post } from "@utils/types"
import Link from "next/link"
import React from "react"

interface Props {
  post: Post
}

const StyledPost = styled.li`
  border-bottom: 2px solid ${colorIntentions.primary};
  box-shadow: ${elevations.shadowMd};
  .head {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
  }
  .content {
    padding: 0.5em;
  }
`

const PostItem = ({ post }: Props): JSX.Element => {
  const { slug, title, date, spoiler, author } = post.data
  return (
    <StyledPost>
      <Link href={`/machines/${slug}`}>
        <a>
          <div className="head">
            <p>{title}</p>
            <p>
              <Capture>{date}</Capture>
            </p>
          </div>
          <div className="content">
            <p>{spoiler}</p>
            <p>
              written by <Capture>{author}</Capture>
            </p>
          </div>
        </a>
      </Link>
    </StyledPost>
  )
}
export default PostItem
