import React from "react"
import { Link, graphql } from "gatsby"

//componets
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Layout from "../components/layout"

//bootstrap
import Container from 'react-bootstrap/Container'


//styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
    <div>
      <Header/>
      <SEO title="erasmus+ eSports news"/>
      <Layout>
      <Container className="container1" style={{ paddingTop: "4rem"}}>

        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
    </Container>
    </Layout>
  <Footer/>
</div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC  }, filter: {frontmatter: {path: {eq: "blog"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
  `
