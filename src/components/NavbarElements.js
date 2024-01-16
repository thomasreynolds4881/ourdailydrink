import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  background: #E6D4D2;
  height: 70px;
  display: block;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 1;
  position: fixed;
  width: 100%;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFFFFF;
    font-weight: bold;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
`;