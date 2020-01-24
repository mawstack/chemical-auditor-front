import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
  isLoggedIn() {
    if (/*Logic for user being logged in*/ true) {
      return (
        <Nav className="mr-auto">
          <Nav.Link href="#home">Logout</Nav.Link>
        </Nav>
      )
    } else {
      return (
        <Nav className="mr-auto">
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
        </Nav>
      )
    }
  }
  
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Chemical Auditor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {this.isLoggedIn()}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;

