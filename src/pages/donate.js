import * as React from "react"
import Layout from "../components/layout"
import DonateHero from "../components/pages/donate/DonateHero"
import DonationSectionContent from "../components/pages/donate/DonationSectionContent"
import Seo from "../components/seo"

const DonatePage = () => (
  <Layout>
    <DonateHero />
    <DonationSectionContent />
    <br />
    <br />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Donate" />

export default DonatePage
