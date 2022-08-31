import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import GallerySection from "../components/Gallery";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { homeObjThree } from "../components/Gallery/Data";
import Projects from "../components/Projects";
import Animation from "../Animation";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Animation>
        <Sidebar open={open} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Projects></Projects>
        <GallerySection {...homeObjThree} />
        <Footer />
      </Animation>
    </>
  );
};

export default Home;
