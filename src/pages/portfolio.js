import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>Take a look at my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
