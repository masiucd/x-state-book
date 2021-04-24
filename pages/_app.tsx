import React from "react"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { cache } from "@emotion/css"
import { CacheProvider } from "@emotion/react"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
