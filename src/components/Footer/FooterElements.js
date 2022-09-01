import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.footer`
  background: var(--background-color);
`;

export const FooterWrap = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-wid: 1100px;
  margin: 0 auto;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
  text-align: left;
  width: 13rem;
  box-sizing: border-box;
  color: var(--secondary-color);

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
    transition: 0.3s ease-out;
  }
`;

export const FooterScroll = styled(LinkS)`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 0.5rem;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-left: -5rem;
  padding: 1rem;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--primary-color);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: var(--secondary-color);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
`;

export const SocialIconLink = styled.a`
  color: var(--primary-color);
  font-size: 24px;

  &:hover {
    color: var(--secondary-color);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
