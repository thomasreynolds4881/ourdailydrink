import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import logo2 from '../images/7.png'
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <img className="logo2" src={logo2} alt="logo2" />
          <NavLink to="/">
            Daily
          </NavLink>
          <NavLink to="/history">
            History
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;