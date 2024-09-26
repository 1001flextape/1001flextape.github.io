import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArcadeHomeAppBar from "../components/pages/arcade-home/ArcadeHomeAppBar"
import ArcadeHomeList from "../components/pages/arcade-home/ArcadeHomeList"

const IndexPage = () => (
  <Layout>
    <ArcadeHomeAppBar />
    <ArcadeHomeList />
    {/* <iframe
      // src="/malbran-games/index.html"
      src={`/ministryware/malbran-games/index.html`}
      width="100%"
      style={{ height: "calc(100vh - 56px)" }}
      frameBorder="0"
      title="Game 2"
    /> */}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
