import { Field } from "@utils/types"
import React from "react"

interface Props {
  post: Field
}

const PostItem = ({ post }: Props): JSX.Element => {
  return (
    <li>
      <p>{post.title}</p>
    </li>
  )
}
export default PostItem
