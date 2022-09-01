import React from "react";
import Img1 from "../../images/projectsImg/Bookstore.png";
import Img2 from "../../images/projectsImg/DABGame.png";
import Img3 from "../../images/projectsImg/locked-out-map.png";
import Img4 from "../../images/projectsImg/website.png";
import Img5 from "../../images/projectsImg/vending machine.png";
import Img6 from "../../images/projectsImg/insuranceTracker.png";

import { FaHome } from "react-icons/fa";

import {
  GalleriesContainer,
  GalleriesBtn,
  GalleriesContent,
  GalleriesH1,
  GalleriesH2,
  GalleriesP,
  GalleriesImg,
} from "./ProjectsPageElements";

const ProjectsPage = () => {
  return (
    <GalleriesContainer>
      <GalleriesContent>
        <GalleriesH1>PROJECTS</GalleriesH1>
        <GalleriesH2>E-commerce Website Building</GalleriesH2>
        <GalleriesImg src={Img1} />
        <GalleriesP>
          ● Designed a bookstore website that has home, category, cart,
          checkout, and confirmation pages using HTML, CSS, JavaScript, and Vue.
          <br />
          ● Populated the bookstore database with various categories of books
          using SQL.
          <br />
          ● Consolidated REST Api service to handle user’s HTTP requests and
          access bookstore DAO objects from the server side.
          <br />
          ● Used Vuex store to centralize all components and manage bookstore
          states.
          <br />
          ● Validated user input from both client (Vuelidate) and server (http
          test) side.
          <br />● Hardened the website to handle invalid requests and unknown
          categories.
        </GalleriesP>

        <GalleriesH2>Dots & Boxes and Adventure Game</GalleriesH2>
        <GalleriesImg src={Img2} />
        <GalleriesP>
          ● Used Swing component to create a responsive game interface that can
          dynamically update users’scores and interact with user each round.
        </GalleriesP>

        <GalleriesImg src={Img3} />
        <GalleriesP>
          ● Created the underlying game engine to initialize games, keep track
          of score, switch players, delegate game logic using Java collections,
          interfaces, and try-catch structure.
          <br />● Tested the game logic with Junit before implementation to
          examine all possible results.
        </GalleriesP>

        <GalleriesH2>Simplified “AI” system</GalleriesH2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6gFg-s2n-a4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <GalleriesP>
          Used Java to create an automatic player of Tetris. Find the best
          placement for each shape and perform calculations by Junit.
        </GalleriesP>

        <GalleriesH2> Lead Tracker Chrome Extension</GalleriesH2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6y3ZnAj9ma4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <GalleriesP>
          Used JavaScript to create a lead tracker Chrome extension to source
          potential leads by saving tab URLs or capturing inputs to local
          storage.
        </GalleriesP>

        <GalleriesH2>PetStore E-commerce Building</GalleriesH2>
        <GalleriesImg src={Img4} />
        <GalleriesP>
          Employed Scrum methodology to draft business plans including Products
          and Service, Marketing Plan, Operations, and Financials research for
          two startups. Led a group project to build a pet store e-commerce
          website.{" "}
        </GalleriesP>

        <GalleriesH2>Vending Machine Program</GalleriesH2>
        <GalleriesImg src={Img5} />
        <GalleriesP>
          Used Java to create a vending machine program to sell various types of
          products, ask for payments, and calculate costs and remaining balance
          based on coins input
        </GalleriesP>

        <GalleriesH2>Insurance tracking program:</GalleriesH2>
        <GalleriesImg src={Img6} />
        <GalleriesP>
          Read and load data, search and sort by policy number, store customer
          information in permanent files, add new customers information in the
          database, and hand exceptions of invalid inputs.
        </GalleriesP>
      </GalleriesContent>
      <GalleriesBtn to="/">
        {" "}
        Back Home <FaHome size={17} />
      </GalleriesBtn>
    </GalleriesContainer>
  );
};

export default ProjectsPage;
