import {ReactNode} from "react"

import MainHeader from "@/components/layout/main_header"
import {PageWrapper} from "@/components/page_wrapper"

interface Props {
  children: ReactNode
}

export default function HomeLayout({children}: Props) {
  return (
    <>
      <MainHeader />
      <PageWrapper className="flex-1">{children}</PageWrapper>
      <footer className="min-h-[5rem] ">
        <div className="mx-auto flex max-w-2xl justify-center gap-1">
          <small>©{new Date().getFullYear()} X state book | </small>
          <small>Built with Next.js and Tailwind CSS | </small>
          <small>Deployed on Vercel</small>
        </div>
      </footer>
    </>
  )
}
