import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "./fan.png";
import "./style.css";
import { NavLink, Link } from "react-router-dom";

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="nav">
        <NavbarBrand href="/">
          <img src={logo} className="App-logo" alt="logo" />
          PC Info
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Components
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    style={{ color: "#020521" }}
                    className="nav-link navd"
                    to="/cpu"
                  >
                    CPU
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink
                    style={{ color: "#020521" }}
                    className="nav-link"
                    to="/gpu"
                  >
                    GPU
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <a
                className="nav-link"
                href="https://github.com/reactstrap/reactstrap"
              >
                GitHub
              </a>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/" exact>
                FAQ
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Poggy Site</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;
