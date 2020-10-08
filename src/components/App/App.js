import React, { useState, useEffect } from "react";

import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import ContactIcons from "../ContactIcons/ContactIcons";

import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
// import Challenge from "../../pages/Challenge/Challenge";
import Relax from "../../pages/Relax/Relax";
import Lost from "../../pages/Lost/Lost";

import "./App.css";

const App = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("about");
  const [shouldVanish, setShouldVanish] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(false);

  const pages = {
    about: <About />,
    projects: <Projects />,
    // challenge: <Challenge />,
    relax: <Relax />,
    lost: <Lost />,
  };

  useEffect(() => {
    setShouldVanish(false);
    let path = window.location.pathname.slice(1);
    let param = path.split("/")[0].toLowerCase();
    if (param !== "") {
      const validParams = Object.keys(pages).map((page) => page.toLowerCase());
      if (validParams.includes(param)) {
        setSelectedPage(param);
        if (param === "relax") {
          setShouldVanish(true);
        }
      } else {
        setSelectedPage("lost");
      }
    }
  }, [pages]);

  const onMouseMove = () => {
    setMouseMoved(true);
    setTimeout(() => {
      setMouseMoved(false);
    }, 1000);
  };

  return (
    <main
      onMouseMove={onMouseMove}
      className={`App ${shouldVanish && !mouseMoved ? "Vanish" : ""}`}
    >
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
    </main>
  );
};

export default App;
