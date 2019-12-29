import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nform from "../components/newform"
import SEO from "../components/seo"
import Button from "../components/button"

class NewsForm extends React.Component{
  render () {
    const siteTitle = "Newsletter"

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <SEO
        title="Newsletter"
        keywords={[`newsletter`, `erasmus`, `lernig`, `education`]}

        />

        <Link to="/">
          <Button marginTop="35px">Back</Button>
        </Link>
        <Nform>
        </Nform>

          </Layout>

    )
  }
}

export default NewsForm
