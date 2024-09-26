/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import BottomNav from "./BottomNav"
import TopNav from "./TopNav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <TopNav />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
        <BottomNav />
      </div>
    </ThemeProvider>
  )
}

export default Layout
