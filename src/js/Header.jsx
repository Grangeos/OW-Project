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
          <NavDropdown className="navItem" title="Attaquant" id="basic-nav-dropdown">
            <MenuItem>
              <Link to="/doomfist">Doomfist</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/genji">Genji</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/mccree">McCree</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/pharah">Pharah</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/reaper">Faucheur</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/soldat">Soldat:76</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/sombra">Sombra</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/tracer">Tracer</Link>
            </MenuItem>
          </NavDropdown>

          <NavDropdown className="navItem" title="Defense" id="basic-nav-dropdown">
            <MenuItem>
              <Link to="/bastion">Bastion</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/hanzo">Hanzo</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/junkrat">Chacal</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/mei">Mei</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/torbjorn">Torbjorn</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/fatale">Fatale</Link>
            </MenuItem>
          </NavDropdown>

          <NavDropdown className="navItem" title="Tank" id="basic-nav-dropdown">
            <MenuItem>
              <Link to="/dva">D.VA</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/orisa">Orisa</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/reinhardt">Reinhardt</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/chopper">Chopper</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/winston">Winston</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/zarya">zarya</Link>
            </MenuItem>
          </NavDropdown>

          <NavDropdown className="navItem" title="soutien" id="basic-nav-dropdown">
            <MenuItem>
              <Link to="/ana">Ana</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/brigite">Brigite</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/lucio">Lucio</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/ange">Ange</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/moira">Moira</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/symmetra">Symmetra</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/zenyatta">Zenyatta</Link>
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}



export default Header;
