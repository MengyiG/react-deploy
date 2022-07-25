import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <div>
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Welcome</NavLogo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="project">Project</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="gallery">Gallery</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="singup">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </>
    </div>
  );
};

export default Navbar;