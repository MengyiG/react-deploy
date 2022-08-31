import styled from "styled-components";

export const GalleriesContainer = styled.div`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(80%);
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
