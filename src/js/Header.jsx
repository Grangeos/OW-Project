import React, { Component } from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar className="navBar" inverse collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navTitle" href="https://playoverwatch.com/fr-fr/heroes/">Overwatch Heroes </a>
            </Navbar.Brand>
          </Navbar.Header>
        <Nav>
          <NavItem className="navItem" ventKey={1} href="">
              Sombra
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              Chopper
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              McCree
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
