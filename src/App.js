import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages";
import ProjectsPage from "./pages/projects";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/galleries" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
