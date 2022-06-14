import React, { Fragment, useContext } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { AuthContext } from "../context/authContext";

import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

// import { Container } from './styles';

function Header() {
  const { toggle, setToggle } = useContext(ThemeContext);
  const { auth, logout } = useContext(AuthContext);

  return (
    <Fragment>
      <Navbar bg={toggle ? "light" : "dark"}  variant="dark">
        <Container>
          <Navbar.Brand href="#home" className={toggle ? "text-dark" : "text-light"}>My App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {auth ? (
              <Fragment>
                <Navbar.Text>Signed in as: {auth.name}</Navbar.Text>
                <Button variant="outline-success" onClick={(e) => logout()}>
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Link as={Link} to="/">Login</Nav.Link>
                <Nav.Link as={Link} to="/Signup">Signup</Nav.Link>
              </Fragment>
            )}
            <Button variant="outline-dark" onClick={() => setToggle(!toggle)}>
              {toggle ? <BsFillMoonFill /> : <BsSunFill />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Header;
