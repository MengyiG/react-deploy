import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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
    </>
  );
};

export default Home;
