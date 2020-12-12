import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const handleLink = (link) => {
    history.push(link);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h2>Project Management</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" onClick={handleLink("/")}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login" onClick={handleLink("/login")}>
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/register"
                onClick={handleLink("/register")}
              >
                Register
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard"
                onClick={handleLink("/dashboard")}
              >
                Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
