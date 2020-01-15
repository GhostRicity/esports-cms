import React from "react"
import { Link } from "gatsby"

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
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


class IndexPage extends React.Component {
  render() {

    return (
      <div>
      <Header/>

      <Jumbotron id="home" className="jumbotron">
        <h1>eSports - gaming for engagement at school</h1>
        <p>
          Gaming for Boosting School Engagement of Students with Learning Disabilities
        </p>
        <p>
         (Ref. No 2019-1-LV01-KA201-060426)
        </p>
        <p>
        <Button variant="light">
          <Link to="#sec1" variant="light">Learn more</Link>
        </Button>
        </p>
      </Jumbotron>
      <Container id="sec1" className="container1">
      <Row>
        <Col sm={4}>
          <h2>eSports</h2>
        </Col>
        <Col xl={8}>
          <p>A consortium of six partners led by the Latvian Dyslexia Association (Latvia) has started the Erasmus+ KA2 strategic partnership project Gaming for Boosting School Engagement of Students with Learning Disabilities (Ref. No 2019-1-LV01-KA201-060426). The aim of the project is to popularize e-sports as a tool for engaging students with various learning disabilities (LDs) in school. </p>
          <p> Students with dyslexia and other learning disabilities are often quite detached from school life and do not get the benefit of socialization and skills development that extra-curricular activities give. Current research and practice suggest that gaming and e-sports are good for developing many skills like concentration, focus, decision making. They also provide a venue for socialising, using of foreign languages and contributing to street credibility as achievement in any sports of a school team does.</p>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <h2>handbook</h2>
        </Col>
        <Col xl={8}>
        <p>The project consortium will assemble the research and best practice to highlight the gains from e-sports for students with LDs and create a manual for schools to organize gaming and e-sports tournaments at schools. The training material for this will be filmed during the three tournaments where teams of students with LDs from all six partner countries will come together to play League of Legends (LoL).</p>
        <p>The research, manual and training videos will be placed on a web site specially created for the project. The project will use Agile tools and techniques in project management and development. Agile is a highly demanded work skill in the Information Technology industry and this can create a professional path for many students with LDs.</p>
        </Col>

      </Row>
      <Row>
        <Col sm><h2>about</h2>
          <p> The partners of the project are Asociacion Cultural y Deportiva la Hoya (Spain), Associacao Check-in - Cooperacao e Desenvolvimento (Portugal), CO.RI.S.S (Italy), Hodina H ZS (Czech Republic) and Srednja poklicna in tehniska šola Murska Sobota (Slovenia). The duration of the project is two years.</p>
        </Col>
        <Col sm>
          <h2>newsletter</h2>
          <p>IF you wolde like to signe up to the newsletter please do. You may even ejoi it</p>
        </Col>
        <Col sm>
          <h2>turnaments</h2>
          <p>The project partners have already met in the first transnational project management meeting in Portugal at the end of November of 2019 and are working on planning the first LoL tournament which will take place in the beginning of March 2020, in Riga, Latvia. </p>
        </Col>
      </Row>

      </Container>
      <Footer/>

    </div>
    )
  }
}



export default IndexPage
