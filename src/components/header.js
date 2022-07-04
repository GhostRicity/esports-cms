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
        <Nav.Link href="/research">research</Nav.Link>
        <Nav.Link href="/tournaments">Tournaments</Nav.Link>
        <NavDropdown title="By Partners" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">LV</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">CZ</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">SLO</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">IT</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">ES</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">PT</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header>
)

export default Header

  //<Nav.Link href="/handbook">handbook</Nav.Link>
