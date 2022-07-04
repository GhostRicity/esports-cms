import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"


const Card = ({ data, link }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ?
    (
      <Link to={link}>
      <Img
        fluid={data.frontmatter.featuredImage.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={data.frontmatter.title + ' - Featured Image'}
        className="featuredImage"
      />
      </Link>

    ) : ""
  }
  <div className="post-content">
    <Link to={link}>
      <h2 className="title">{data.frontmatter.title}</h2>
    </Link>
    <p className="meta">{data.frontmatter.description} <br/><time>{data.frontmatter.date}</time></p>

  </div>
  </article>
)

export default Card

