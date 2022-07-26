import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="project" isOpen={isOpen} onClick={toggle}>
            Project
          </SidebarLink>
          <SidebarLink to="gallery" isOpen={isOpen} onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="signup" isOpen={isOpen} onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
