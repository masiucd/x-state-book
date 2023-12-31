import "server-only";

import {allPosts} from "contentlayer/generated";
import {headers} from "next/headers";

export function getPost(title: string) {
  let post = allPosts.find(
    (post) => post.title.toLowerCase() === title.toLowerCase()
  );
  return post ? post : null;
}

export function getPathPartOrDefault(defaultValue: string, index = -1) {
  let headerList = headers();
  let pathname = headerList.get("referer");
  if (!pathname) {
    return defaultValue;
  }
  let parts = pathname.split("/");
  return parts.at(index) ?? defaultValue;
}
