import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
          <h1>React.js Project Assignment App for Kingsland University</h1>
          <p><b>Requirements</b></p>
          <p>A SPA with a public area and private area with authentication. I am choosing Auth0 token based authentication with the option for multi-factor protection since web security breaches (ransom ware, spy/mal ware, etc.) are common and can be very damaging to users. Klaus Schwab of the World Economic Forum states that the next pandemic will be a cyberwar(already happening, SolarWinds etc.) </p>
          <p>At least 3 different dynamic pages with DB and standard React stuff.</p>
          <p>This page is built using the Gatsby template as oppossed to the 'create-react-app' template. This allows Router for multiple pages, GraphQL for database, Helmet for SEO, etc. to be templated
          right away to save time and expense.</p>
          <Link to="/page-2/">Watch video demo of project</Link> 
           <p><b>Bruce writing code for this assignment.</b></p>
    
    <StaticImage
      src="../images/Bruce-writing-code-pic.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Bruce King writing code"
      style={{ marginBottom: `1.45rem` }}
    />

      </div>
    </div>   
  </Layout>
)

export default IndexPage
