import React from "react"
import { Link } from "gatsby"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bookr from "../components/reader"

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


class HandBook extends React.Component{
  render(){
    const siteTitle = "Handbook"

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
      <Row>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Handbook Eng</Card.Title>
    <Card.Text>
      Read hear or downolade for later use
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="reader">Read</Card.Link>
    <Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
  </Card.Body>
</Card>

</Row>
<Row>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
Read hear or downolade for later use
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/MonsterManual.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

</Row>


      </Container>
      <Footer/>
        </div>
    )
  }
}

export default HandBook
