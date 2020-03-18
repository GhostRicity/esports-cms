import React from "react"
//bootstrap
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const Header = () => (
<header>
  <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">eSports</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto justify-content-end" >
        <Nav.Link href="/blog">news</Nav.Link>
        <Nav.Link href="/about">about</Nav.Link>
        <Nav.Link href="/handbook">handbook</Nav.Link>
        <Nav.Link href="/research">research</Nav.Link>
        <Nav.Link href="/tournaments">Tournament</Nav.Link>
        <Nav.Link href="/newsletter">newsletter</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>
)

export default Header
