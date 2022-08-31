import React from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaHeart } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
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
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Title</FooterLinkTitle>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
              <FooterLink to="/">About us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
