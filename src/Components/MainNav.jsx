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
        <NavLink to="/">
          <NavbarBrand>
            <img src={logo} className="App-logo" alt="logo" />
            PC Info
          </NavbarBrand>
        </NavLink>
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
              <NavLink className="nav-link" to="/build" exact>
                Build a PC
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                className="nav-link"
                // style={{ cursor: "pointer" }}
                // onClick={() =>
                //   window.open("https://github.com/leodude77/PC-info", "_blank")
                // }
              >
                GitHub
              </a>
            </NavItem>
          </Nav>
          <NavbarText>Poggy Site</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;
