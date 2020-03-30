import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

//import componets
import Header from "../components/header"
import Footer from "../components/footer"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const IndexPage = () => {
const bgImage = useStaticQuery(graphql`
    query BgImage {
       desktop: file(relativePath: { eq: "esports-1.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp

        }
      }
    }
  }
    `)

    return (

      <div>
      <Header/>
      <BackgroundImage fluid={bgImage.desktop.childImageSharp.fluid}>
      <Jumbotron id="home" className="jumbotron" style={{ marginTop: "3rem"}}>
        <h1>eSports - gaming for engagement at school</h1>
        <p>
          Gaming for Boosting School Engagement of Students with Learning Disabilities
        </p>
        <p>
         Ref. No 2019-1-LV01-KA201-060426
        </p>
        <p>
        </p>
      </Jumbotron>
      </BackgroundImage>
      <Container className="container1">
      <Row>
        <Col sm={4}>
          <h2>eSports</h2>
        </Col>
        <Col xl={8}>
        <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <h2>handbook</h2>
        </Col>
        <Col xl={8}>
        <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
        </Col>

      </Row>
      <Row>
        <Col sm><h2>about</h2>
          <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
        </Col>
        <Col sm>
          <h2>newsletter</h2>
          <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
        </Col>
        <Col sm>
          <h2>tournament</h2>
          <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
        </Col>
      </Row>

      </Container>
      <Footer/>

    </div>

  )
}

export default IndexPage
