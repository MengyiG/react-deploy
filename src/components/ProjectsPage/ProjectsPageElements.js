import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const GalleriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 800px;
  width: 100%;
  overflow: scroll;
  background: var(--primary-color);
`;

export const GalleriesBtn = styled(LinkR)`
  font-size: 1.2rem;
  text-align: center;
  color: var(--primary-color);
  z-index: 0;
  text-decoration: none;
  background-color: var(--background-color);
  border-radius: 30px;
  position: fixed;
  bottom: 5%;
  padding: 0.8rem 1.5rem;
  right: 3%;
  border: 2px var(--background-color) solid;

  &:hover {
    transition: 0.4s;
    background-color: var(--primary-color);
    color: var(--text-color);
    border: 2px var(--background-color) solid;
  }
`;

export const GalleriesContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  background-color: rgba(27, 31, 34, 0.85);
  opacity: 95%;
  max-width: 60rem;
  padding: 4rem;
`;

export const GalleriesH1 = styled.h1`
  color: var(--text-color);
  border-bottom: 2px solid var(--text-color);
  font-size: 2rem;
  font-weight: lighter;
  text-align: left;
  line-height: 35px;
  margin-bottom: 1rem;
`;

export const GalleriesH2 = styled.h2`
  color: var(--text-color);
  font-size: 22px;
  line-height: 35px;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;
export const GalleriesImg = styled.img`
  max-width: 45rem;
  border-radius: 1%;
`;

export const GalleriesP = styled.div`
  color: var(--text-color);
  padding: 2rem 5rem;
  font-size: 17px;
  font-weight: lighter;
`;
