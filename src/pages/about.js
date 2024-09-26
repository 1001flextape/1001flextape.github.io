import * as React from "react"
import Layout from "../components/layout"
import AboutHero from "../components/pages/about/AboutHero"
import OurMission from "../components/pages/about/OurMission"
import InnovativeSolutions from "../components/pages/about/InnovativeSolutions"
import AboutFooter from "../components/pages/about/AboutFooter"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    {/* <h1>About Page</h1> */}
    <AboutHero />
    <OurMission />
    <InnovativeSolutions />
    <AboutFooter />
    <br />
    <br />
  </Layout>
)
export const Head = () => <Seo title="About" />

export default AboutPage
