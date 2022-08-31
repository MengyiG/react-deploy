import React from "react";
import { Button } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  GalleryButton,
} from "./GalleryElements";

const GallerySection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  descriptionp1,
  descriptionp2,
  descriptionp3,
  descriptionp4,
  darkText,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{descriptionp1}</Subtitle>
                <Subtitle darkText={darkText}>{descriptionp2}</Subtitle>
                <Subtitle darkText={darkText}>{descriptionp3}</Subtitle>
                <Subtitle darkText={darkText}>{descriptionp4}</Subtitle>
                <BtnWrap>
                  <GalleryButton
                    to="/galleries"
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {" "}
                    {buttonLabel}
                  </GalleryButton>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default GallerySection;
