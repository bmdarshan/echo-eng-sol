import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

export default class EchoEngHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">Echo Engineering Solutions</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	        <NavItem eventKey={1} href="#">Products & services</NavItem>
	        <NavItem eventKey={1} href="#">Team</NavItem>
	        <NavItem eventKey={2} href="#">Contact</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
      </div>
    );
  }
}
