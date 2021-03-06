import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="car service logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Services</Nav.Link>
                        <Nav.Link as={Link} to="home">Experts</Nav.Link>
                        {
                            user && <NavDropdown title="Admin Panal" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="add-service">Add a Service</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="manage-services">Manage Services</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {user ? <>
                            <Nav.Link as={Link} to="orders" >Orders</Nav.Link>
                            <Nav.Link as={Link} to="login" onClick={() => signOut(auth)} >Log Out</Nav.Link>
                        </> : <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;