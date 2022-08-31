import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
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
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
