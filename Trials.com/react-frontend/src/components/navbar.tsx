import React from "react";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/navbar.scss";
import { Button } from "react-bootstrap";
import {
    alpha,
    makeStyles,
    Theme,
    createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Logout from "./Authentication/logout";

import { useAuth } from "../contexts/auth-context";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar(props: any) {
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

                <Nav activeKey={props.location.pathname} className="nav">
                    <Nav.Link href="/" className="navbar-link">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/submit-run" className="navbar-link">
                        Submit-Run
                    </Nav.Link>
                    <Nav.Link href="/runs" className="navbar-link">
                        Runs
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
                    <NavDropdown.Item className="navbar-dropdown-item">
                        <Logout />
                    </NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </div>
    );
}

/*
 <Navbar bsPrefix={"color-nav"}>
            <Navbar.Brand href="/">TNP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/submit-run">Submit-Run</Nav.Link>
                    <Nav.Link href="/runs">Runs</Nav.Link>
                    <NavDropdown
                        alignRight
                        title={<FontAwesomeIcon icon={faUserNinja} size="lg" />}
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown.Item href="/profile">
                            View Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Logout />
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
*/

/*
const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: any) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className="navbar-outer">
            <AppBar position="static" className="navbar">
                <Toolbar>
                    <Typography className="navbar-title" variant="h6" noWrap>
                        Material-UI
                    </Typography>
                    <div className="navbar-search">
                        <div className="navbar-search-icon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: "navbar-search-root",
                                input: "navbar-search-input",
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div className="navbar-desktop">
                        <IconButton
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
*/
