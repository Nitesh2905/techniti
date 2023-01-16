import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../files/logo2.png";
const NavbarN = () => {
  return (
    <>
      {/* <nav className="py-3 navbar flex h-20 justify-center uppercase font-bold  ">
        <Link to="/">
          <img
            src={logo}
            width="20%"
            className="relative right-20 "
            alt="technitilogo"
          />
        </Link>
        <ul className="flex space-x-10 mb-3 ml-5 px-5 justify-between items-center md:flex:flex-col  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/team">Our Team</Link></li>
        </ul>
      </nav> */}
      <nav className="h-15 font-bold text-black text-lg">

      
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="15%"
                className="relative right-20"
                alt="technitilogo"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link href="/" className="text-black">
                  Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/events">
                <Nav.Link className="text-black">Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="text-black">About Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </nav>
    </>
  );
};

export default NavbarN;
