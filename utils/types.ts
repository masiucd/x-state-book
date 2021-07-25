export interface ListData {
  name: string
  path: string
}

export type Data = string | number | boolean | null | { [property: string]: Data } | Data[]

export interface GithubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
  name: string
  type: string
  location: string
}

export type FieldType = "slug" | "content" | "title" | "spoiler" | "author" | "date"

export interface Field {
  slug: string
  content: string
  title: string
  spoiler: string
  author: string
  date: string
}

export interface FrontMatterData {
  author: string
  date: string
  slug: string
  spoiler: string
  title: string
}
export interface Post {
  content: string
  post: string
  data: FrontMatterData
}
