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
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute href="mailto: yiii9292@gmail.com" target="_blank">
            Contact Me
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
