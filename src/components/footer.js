import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Footer = () => {
const data = useStaticQuery(graphql`
  query Images {
    image: file(relativePath: { eq: "one.jpg" }) {
      childImageSharp {
        fixed(width:250) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
  `)
console.log(data)

  return (
  <footer>
    <Jumbotron className="footer">
      <Row>
        <Col sm={4}>
          <Img fixed={data.image.childImageSharp.fixed} alt="Erasmus+ logo" />
          <p> Ref. No 2019-1-LV01-KA201-060426 </p>
        </Col>
        <Col sm={4}>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="http://www.disleksija.lv/">LDB</a>
        </Col>
        <Col sm={4}>

        </Col>
      </Row>
    </Jumbotron>
  </footer>
 )
}

export default Footer
