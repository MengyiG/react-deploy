import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import ProjectsPage from "./pages/projects";
import GalleryPage from "./pages/gallery";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/galleries" element={<GalleryPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
