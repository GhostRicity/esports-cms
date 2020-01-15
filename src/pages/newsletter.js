import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nform from "../components/newform"
import SEO from "../components/seo"
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
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class NewsForm extends React.Component{
  render () {
    const siteTitle = "Newsletter"

    return (
      <div>

      <Header/>

      <Container  className="container1">
      <Row>
      </Row>
      <Row>
        <Col xl>
          <h2>Handbook</h2>
        </Col>
        <Col md="auto">
          <p>A consortium of six partners led by the Latvian Dyslexia Association (Latvia) has started the Erasmus+ KA2 strategic partnership project Gaming for Boosting School Engagement of Students with Learning Disabilities (Ref. No 2019-1-LV01-KA201-060426). The aim of the project is to popularize e-sports as a tool for engaging students with various learning disabilities (LDs) in school. </p>
          <p> Students with dyslexia and other learning disabilities are often quite detached from school life and do not get the benefit of socialization and skills development that extra-curricular activities give. Current research and practice suggest that gaming and e-sports are good for developing many skills like concentration, focus, decision making. They also provide a venue for socialising, using of foreign languages and contributing to street credibility as achievement in any sports of a school team does.</p>
        </Col>
      </Row>
      <Nform>
      </Nform>
      </Container>


      <Footer/>
        </div>
    )
  }
}





export default NewsForm
