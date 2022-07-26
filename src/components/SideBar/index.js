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

const Sidebar = ({ open, toggle }) => {
  return (
    <SidebarContainer open={open} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" open={open} onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="project" open={open} onClick={toggle}>
            Project
          </SidebarLink>
          <SidebarLink to="gallery" open={open} onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="signup" open={open} onClick={toggle}>
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
