import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Daily Drink
          </NavLink>
          <NavLink to="/history">
            Drink History
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;