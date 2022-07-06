import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index";
import Home from "./components/home/index";
import About from "./components/about/index";
import Contact from "./components/contact/index";
import Blog from "./components/blog/index";
import Careers from "./components/careers/index";
import Footer from "./components/footer/index";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
