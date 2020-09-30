import React, { useState } from "react";

import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import ContactIcons from "../ContactIcons/ContactIcons";

import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Challenge from "../../pages/Challenge/Challenge";

import "./App.css";

const App = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("About");

  const pages = {
    About: <About />,
    Projects: <Projects />,
    Challenge: <Challenge />,
  };

  return (
    <div className="App">
      <Burger
        isMenuOpen={isMenuOpen}
        onClick={() => {
          toggleMenuOpen(!isMenuOpen);
        }}
      />
      <Menu
        isMenuOpen={isMenuOpen}
        setSelectedPage={(pageId) => {
          setSelectedPage(pageId);
          toggleMenuOpen(false);
        }}
      />
      {pages[selectedPage]}
      <ContactIcons />
    </div>
  );
};

export default App;
