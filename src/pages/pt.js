import React from "react"
import { Link, graphql } from "gatsby"

//componets
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Card from "../components/cards"


//bootstrap
import Container from 'react-bootstrap/Container'

//styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

class Pt extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge =>
    <Card key={edge.node.id} data={edge.node} link={edge.node.fields.slug} />
    )


    return (
    <div>
    <SEO title="research"/>
      <Header/>
      <Layout>
        <Container className="container1" style={{ paddingTop: "4rem"}}>
                <div className="grids sm-1 lg-2">
                    {posts}
                </div>
        </Container>
      </Layout>
      <Footer/>
      </div>
    )
  }
}

export default Pt

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC  }, filter: {frontmatter: {path: {eq: "es"}}}) {
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
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `