import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Projects from "../components/Projects";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar open={open} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Projects></Projects>
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
