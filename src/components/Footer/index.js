import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaHeart,
  FaDiscord,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
  FooterScroll,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Pages</FooterLinkTitle>
            <FooterLink to="/" onClick={toggleHome}>
              Main
            </FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/galleries">Galleries</FooterLink>
            <FooterLink to="/contact">Contact Me</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Main Sections</FooterLinkTitle>
            <FooterScroll
              to="about"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </FooterScroll>
            <FooterScroll
              to="edu"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Education & Experience
            </FooterScroll>
            <FooterScroll
              to="project"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Projects
            </FooterScroll>
            <FooterScroll
              to="gallery"
              smooth={true}
              duration={800}
              spy={true}
              exact="true"
              offset={-80}
            >
              Gallery
            </FooterScroll>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>References</FooterLinkTitle>
            <FooterLink
              to="//www.pexels.com/video/early-morning-sunlight-through-the-leaves-2840959/"
              target="_blank"
            >
              Main Page Video
            </FooterLink>
            <FooterLink to="//undraw.co/search" target="_blank">
              Other Illustrations
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Useful Links</FooterLinkTitle>
            <FooterLink to="//undraw.co/" target="_blank">
              Illustration: unDraw.co
            </FooterLink>
            <FooterLink to="//www.pexels.com/" target="_blank">
              Video: pexels.com
            </FooterLink>
            <FooterLink
              to="//www.youtube.com/playlist?list=PLs1fqgQpnCmJSkrDA2wTsSsLnYpE8jpVy"
              target="_blank"
            >
              React Tutorial: Brian Design
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <FaHeart /> &nbsp;Mengyi Guo
            </SocialLogo>
            <WebsiteRights>
              {" "}
              Ⓒ{new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/mengyi-guo/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//github.com/MengyiG"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/channel/UCu7Q8pfeEvjgTxVyj7YVxHw"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://discord.com/users/880267292846477313"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
