import React from "react"
import { Link } from "gatsby"

//bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const Footer = () => (
  <footer>
  <Jumbotron className="footer">
    <p>
      footer
    </p>
    <p>
    <Button variant="outline-primary" style={{
      margin: '10px',
    }}>
    <Link to="#sec1">Back to top</Link>
    </Button>
    </p>
  </Jumbotron>

  </footer>
)

export default Footer
