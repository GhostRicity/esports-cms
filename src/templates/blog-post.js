import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

//componets
import Header from "../components/header"
import Footer from "../components/footer"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    return (
      <div>
      <Header/>
      <Layout location={this.props.location} >
      <div style={{ paddingTop: "4rem"}}>


        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginBottom: "50px",
          }}
          >
          {post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />


        <ul style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link to={`${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>

        </div>
      </Layout>
      <Footer/>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
