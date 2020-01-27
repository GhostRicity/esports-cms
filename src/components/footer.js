import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const Footer = props => {

  return (
  <footer>
    <Jumbotron className="footer">
      <Row>
        <Col sm={6}>
          <p> Erasmus + </p>
          <p> (Ref. No 2019-1-LV01-KA201-060426) </p>
        </Col>
        <Col sm={4}>
          <p>Contacts</p>
          <p>info@esport.com</p>
        </Col>
      </Row>
      <Row>
        <svg className="logo"></svg>
      </Row>
      <Row>
        <p> &copy; 2020 Eduards Birznieks</p>
      </Row>
    </Jumbotron>
  </footer>
 )
}

export default Footer

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
