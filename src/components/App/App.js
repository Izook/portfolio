import React, { useState, useEffect } from "react";

import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";
import ContactIcons from "../ContactIcons/ContactIcons";

import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
// import Challenge from "../../pages/Challenge/Challenge";
import Relax from "../../pages/Relax/Relax";
import Lost from "../../pages/Lost/Lost";
import Privacy from "../../pages/Privacy/Privacy";

import "./App.css";

let timer = -1;

const App = () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("about");
  const [shouldVanish, setShouldVanish] = useState(false);
  const [userActive, setUserActive] = useState(false);

  const pages = {
    about: <About />,
    projects: <Projects />,
    // challenge: <Challenge />,
    relax: <Relax />,
    lost: <Lost />,
    privacy: <Privacy />,
  };

  useEffect(() => {
    const path = window.location.hash.slice(1);
    if (path !== "") {
      const validPaths = Object.keys(pages).map((page) => page.toLowerCase());
      if (validPaths.includes(path)) {
        setSelectedPage(path);
        if (path === "relax") {
          if (timer === -1) {
            timer = setTimeout(() => {
              setShouldVanish(true);
              timer = -1;
            }, 3000);
          }
        } else {
          setShouldVanish(false);
        }
      } else {
        setSelectedPage("lost");
      }
    }
  }, [pages]);

  const onUserActivity = () => {
    setUserActive(true);
    setTimeout(() => {
      setUserActive(false);
    }, 1000);
  };

  return (
    <main
      onMouseMove={onUserActivity}
      onMouseDown={onUserActivity}
      className={`App ${
        shouldVanish && !userActive && !isMenuOpen ? "Vanish" : ""
      }`}
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
