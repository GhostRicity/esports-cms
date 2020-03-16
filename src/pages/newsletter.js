import React from "react"

import Nform from "../components/newform"
import Header from "../components/header"
import Footer from "../components/footer"


//import styles
import '../styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class NewsForm extends React.Component{
  render () {

    return (
      <div>

      <Header/>

      <Container  className="container1" style={{ marginBottom: "13rem", marginTop: "5rem"}}>
      <Row>
      </Row>
      <Row>
        <Col xl>
          <h2>Handbook</h2>
        </Col>
        <Col md="auto">
          <p>This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. This section is under development. </p>
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
