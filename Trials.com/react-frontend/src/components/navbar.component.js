import React from "react";
import Icon from "./icon.component";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand className="m-auto" href="/">
        TNP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#submit-run">Submit-Run</Nav.Link>
          <NavDropdown alignRight title={<Icon />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="logout">
              <b>Log Out</b>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
