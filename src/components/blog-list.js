import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Card from "./cards"

const PostMaker = ({ data }) => (
  <section className="home-post">
    <div className="grids sm-2 lg-3">
      {data}
    </div>
  </section>
)

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
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
        }`
      }

      render={ data => {
          const posts = data.allMdx.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <Card key={edge.node.id} data={edge.node} link={edge.node.fields.slug}/>

          )
          return <PostMaker data={posts} />
        }
      }
    />
  )
}
