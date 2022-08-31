import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import NavBar from "../components/NavBar";
import GalleriesPage from "../components/GalleriesPage";
import Footer from "../components/Footer";

const GalleryPage = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar open={open} toggle={toggle} />
      <NavBar toggle={toggle} />
      <GalleriesPage />
      <Footer />
    </>
  );
};

export default GalleryPage;
