import styled from "styled-components";

export const GalleriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  height: 800px;
  overflow: scroll;
  background: var(--primary-color);
`;
export const GalleriesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(27, 31, 34, 0.85);
  opacity: 95%;
  max-width: 60rem;
  padding: 5rem;
`;

export const GalleriesH1 = styled.h1`
  color: var(--text-color);
  border-bottom: 2px solid var(--text-color);
  font-size: 2rem;
  text-align: left;
  line-height: 35px;
  margin-top: 4rem;

  margin-bottom: 1rem;
`;

export const GalleriesH2 = styled.h2`
  color: var(--text-color);
  font-size: 16px;
  line-height: 35px;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;
export const GalleriesImg = styled.img`
  width: 33rem;
  border-radius: 5%;
`;

export const GalleriesP = styled.div`
  color: var(--text-color);
  padding: 2rem;
`;
