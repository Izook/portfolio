import React, { useState } from "react";

import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import ContactIcons from "../ContactIcons/ContactIcons";

import About from "../../pages/About/About";

import "./App.css";

const App = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  return (
    <div className="App">
      <Burger
        isMenuOpen={isMenuOpen}
        onClick={() => {
          toggleMenuOpen(!isMenuOpen);
        }}
      />
      <Menu isMenuOpen={isMenuOpen} />
      <About />
      <ContactIcons />
    </div>
  );
};

export default App;
