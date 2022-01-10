import { Button } from "react-bootstrap";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logout from "../authentication/logout";
import { useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation();
    return (
        <div className="appbar">
            <Navbar className="navbar">
                <Navbar.Brand href="/" className="navbar-brand">
                    TNP
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-toggle"
                />

                <Nav activeKey={location.pathname} className="nav">
                    <Nav.Link href="/" className="navbar-link">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/submit-run" className="navbar-link">
                        Submit-Run
                    </Nav.Link>
                    <Nav.Link href="/runs" className="navbar-link">
                        Runs
                    </Nav.Link>
                    <Nav.Link href="/tracks" className="navbar-link">
                        Tracks
                    </Nav.Link>
                    <Nav.Link href="/creators" className="navbar-link">
                        Creators
                    </Nav.Link>
                </Nav>
                <NavDropdown
                    alignRight
                    title={<FontAwesomeIcon icon={faUserNinja} size="lg" />}
                    id="navbar-dropdown"
                >
                    <NavDropdown.Item
                        href="/profile"
                        className="navbar-dropdown-item"
                    >
                        <Button>View Profile</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href="/update-profile"
                        className="navbar-dropdown-item"
                    >
                        <Button>Update Profile</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item className="navbar-dropdown-item">
                        <Logout />
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </div>
    );
}
