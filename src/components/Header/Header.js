import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import logo from "./../../images/logo.png";
import HeaderBG from "./../../images/header-bg.png";
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const  {
    allContext,
   } = useAuth();
    const {user, logOut} = allContext;
    const { displayName, photoURL, email } = user;
  return (
    <div>
      <Navbar style={{ background: `url(${HeaderBG})`}} expand="lg">
        <Container>
   
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="70px" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/products" className="text-white">
                Products
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className="text-white">
                Services
              </Nav.Link>

              {!email ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log In
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;