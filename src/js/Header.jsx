import React, { Component } from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from "react-bootstrap";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar className="navBar" inverse collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navTitle" href="/">Overwatch Heroes </a>
            </Navbar.Brand>
          </Navbar.Header>
        <Nav>
          <NavItem className="navItem" ventKey={1} href="">
              <Link to="/sombra">Sombra</Link>
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              <Link to="/chopper">Chopper</Link>
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              <Link to="/mccree">Mccree</Link>
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              <Link to="/junkrat">Chacal</Link>
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              <Link to="/lucio">Lucio</Link>
          </NavItem>
          <NavItem className="navItem" ventKey={2} href="#">
              <Link to="/reaper">Faucheur</Link>
              <Link to="/hanzo">Hanzo</Link>
              <Link to="/mei">Mei</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
