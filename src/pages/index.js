import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>React.js Project Assignment App for Kingsland University</h1>
    <p><b>Requirements</b></p>
    <p>Public and private parts with authentication.</p>
    <p>At least 3 different dynamic pages with DB and standard React stuff.</p>
    
    <p><b>Bruce writing code for this assignment.</b></p>
    <StaticImage
      src="../images/Bruce-writing-code-pic.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Bruce King writing code"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
