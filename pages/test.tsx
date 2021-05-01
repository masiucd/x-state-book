import Layout from "@components/layout"
import FetchData from "@components/machines/fetch-data"
import TimeOfTheDay from "@components/machines/time-of-the-day"
import React from "react"

// TODO: This page will be removed
const ConditionsPage = (): JSX.Element => {
  return (
    <Layout>
      <TimeOfTheDay />
      <FetchData />
    </Layout>
  )
}

export default ConditionsPage
