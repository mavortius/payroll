import React, {useState} from 'react';
import {Link, NavLink as RouterNavLink} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <RouterNavLink className="nav-link" to="/employees" exact>Manage Employees</RouterNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default AppNavbar