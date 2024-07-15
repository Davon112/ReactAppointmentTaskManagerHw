
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";







const NavBar = () =>{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Appointly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-top">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/schedule-appointment">Schedule Appointment</Nav.Link>
            <Nav.Link as={Link} to="my-appointments">My Appointments</Nav.Link>
            
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavLink as={Link} to="/profile"><NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item></NavLink>
              <NavLink as={Link} to="/sign-in"><NavDropdown.Item href="#action/3.1">Sign-In</NavDropdown.Item></NavLink>
              <NavLink as={Link} to="/sign-up"><NavDropdown.Item href="#action/3.2">
                Sign-Up
              </NavDropdown.Item></NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;