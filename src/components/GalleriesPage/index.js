import React from "react";
import Img1 from "../../images/Img1.JPG";
import Img2 from "../../images/Img2.jpg";
import Img3 from "../../images/picture3.JPG";
import Img4 from "../../images/picture1.JPG";
import Img5 from "../../images/picture2.JPG";
import Img6 from "../../images/dog.JPG";
import Img7 from "../../images/rabbit.JPG";
import Img8 from "../../images/plants2.JPG";
import Img9 from "../../images/plants1.JPG";
import Img10 from "../../images/coffee.jpg";
import Img11 from "../../images/winter.JPG";
import Img12 from "../../images/hand in hand.JPG";
import BackTopBtn from "../BackToBtn";

import { FaCameraRetro, FaHome } from "react-icons/fa";

import {
  GalleriesContainer,
  GalleriesBtn,
  GalleriesContent,
  GalleriesH1,
  GalleriesH2,
  GalleriesP,
  GalleriesImg,
} from "./GalleriesPageElements";

const GalleriesPage = () => {
  return (
    <GalleriesContainer>
      <BackTopBtn />
      <GalleriesContent>
        <GalleriesH1>GALLERY</GalleriesH1>
        <GalleriesH2>
          I LOVE CAPTURING <FaCameraRetro /> EVERY BEAUTIFUL MOMENT OF LIFE.
        </GalleriesH2>
        <GalleriesImg src={Img1} />
        <GalleriesP>Summer, 2021, Toronto</GalleriesP>
        <GalleriesImg src={Img2} />
        <GalleriesP>Summer, 2021, Toronto</GalleriesP>

        <GalleriesH2>I JUST BEGIN TO LEARN PAINTING.</GalleriesH2>
        <GalleriesImg src={Img3} />
        <GalleriesP>painting on the stone</GalleriesP>
        <GalleriesImg src={Img4} />
        <GalleriesP>painting: reading </GalleriesP>
        <GalleriesImg src={Img5} />
        <GalleriesP>painting: two women enjoying time</GalleriesP>

        <GalleriesH2>PETS.</GalleriesH2>
        <GalleriesImg src={Img6} />
        <GalleriesP>Yes, I have a dachshund 🦴</GalleriesP>
        <GalleriesImg src={Img7} />
        <GalleriesP>and a bunny 🐰</GalleriesP>

        <GalleriesH2>I AM GOOD AT GARDENING.</GalleriesH2>
        <GalleriesImg src={Img8} />
        <GalleriesP>avocado 🥑 plants</GalleriesP>
        <GalleriesImg src={Img9} />
        <GalleriesP>other greens 💚</GalleriesP>

        <GalleriesH2>MORE CAPTURES.</GalleriesH2>
        <GalleriesImg src={Img10} />
        <GalleriesP>Autumn, 2021, Home</GalleriesP>
        <GalleriesImg src={Img11} />
        <GalleriesP>Winter, 2019, Montreal</GalleriesP>
        <GalleriesImg src={Img12} />
        <GalleriesP>Summer, 2021, Toronto</GalleriesP>
      </GalleriesContent>
      <GalleriesBtn to="/">
        {" "}
        Back Home <FaHome size={17} />
      </GalleriesBtn>
    </GalleriesContainer>
  );
};

export default GalleriesPage;
