import React from "react"

//import componets
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


class HandBook extends React.Component{
  render(){
   return (
      <div>
      <SEO title="Handbook"/>
      <Header/>

      <Container  className="container1" style={{ marginTop: "5rem"}}>
      <Row>
      </Row>
      <Row>
        <Col xl>
          <h2>Handbook</h2>
        </Col>
        <Col md="auto">
          <p>The project team is working on developing this content.</p>
        </Col>
      </Row>
      <Row>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Handbook Eng</Card.Title>
    <Card.Text>
       This section is under development.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
  </Card.Body>
</Card>

</Row>
<Row>

  <Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title>Handbook Eng</Card.Title>
  <Card.Text>
    The project team is working on developing this content.
  </Card.Text>
</Card.Body>
<Card.Body>
  <Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
The project team is working on developing this content.
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="/reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
The project team is working on developing this content.
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="/reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
<Card.Body>
<Card.Title>Handbook Eng</Card.Title>
<Card.Text>
The project team is working on developing this content.
</Card.Text>
</Card.Body>
<Card.Body>
<Card.Link href="/reader">Read</Card.Link>
<Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
</Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title>Handbook Eng</Card.Title>
    <Card.Text>
     The project team is working on developing this content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
    </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Handbook Eng</Card.Title>
      <Card.Text>
        The project team is working on developing this content.
        </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="http://localhost:8000/Rokas.pdf" download>Download</Card.Link>
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
