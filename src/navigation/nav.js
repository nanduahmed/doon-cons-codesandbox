import React from "react";
// import Projects from "./Projects";
// import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/">
            <NavbarBrand href="#">Doon Constructions</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/projects">
                  <NavLink>Projects</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/services">
                  <NavLink>Services</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/rates">
                  <NavLink>Rates</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about">
                  <NavLink>About Us</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
