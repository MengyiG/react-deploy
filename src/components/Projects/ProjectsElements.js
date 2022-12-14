import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProjectsContainer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5rem;
  background: var(--background-color);

  @media screen and (max-midth: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1200px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items; start;
  grid-gap: 5rem;
  padding 0 50px;

  @media screen and (max-midth: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: var(--primary-color) solid 4px;
  border-radius: 2rem;
  max-height: 340px;
  padding: 20px;
  box-shadow: 5px 5px 10px #aaaaaa;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
    transition: all 0.2s ease-in-out;
    border: var(--secondary-color) solid 4px;

    @media screen and (max-width: 768px) {
      &:hover {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        border: var(--secondary-color) solid 4px;
    }

  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: var(--primary-color);
`;

export const ProjectsNote = styled(LinkR)`
  font-size: 0.8rem;
  text-align: center;
  text-decoration: underline;
  color: var(--primary-color);
  font-weight: bold;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const ProjectsLink = styled(LinkR)`
  font-size: 1.1rem;
  text-align: center;
  color: var(--text-color);
  margin: 6rem 0;
  text-decoration: none;
  background-color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: 25px;
  border: 2px solid var(--primary-color);
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--primary-color);
    background-color: var(--background-color);
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease-in-out;
  }
`;
