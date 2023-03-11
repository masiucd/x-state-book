import {ReactNode} from "react"

import MainFooter from "@/components/layout/main_footer"
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
      <MainFooter />
    </>
  )
}
