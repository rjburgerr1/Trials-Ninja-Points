import React from "react";
import Icon from "./icon";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logout from "./logout";

import { useAuth } from "../contexts/auth-context";

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
          <Nav.Link href="/submit-run">Submit-Run</Nav.Link>
          <NavDropdown alignRight title={<Icon />} id="basic-nav-dropdown">
            <NavDropdown.Item href="profile/">View Profile</NavDropdown.Item>
            <NavDropdown.Item>
              <Logout />
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
