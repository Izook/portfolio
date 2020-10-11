import React, { useEffect, useState } from "react";
import anime from "animejs";

import MenuButton from "./MenuButton";

import "./Menu.css";

import profilePic from "../../assets/profile.jpg";

const menuColors = ["#A3403B", "#B3AA40", "#8740B3", "#AD8A3E"];
const randomColor = () => {
  return menuColors[Math.floor(Math.random() * menuColors.length)];
};

const Menu = ({ isMenuOpen, setSelectedPage }) => {
  useEffect(() => {
    const rotateColors = () => {
      anime({
        targets: ".MenuBackground",
        backgroundColor: randomColor(),
        duration: 2000,
        easing: "linear",
        complete: rotateColors,
      });
    };
    rotateColors();
  }, []);

  const [hasOpened, setHasOpened] = useState(false);
  useEffect(() => {
    if (!hasOpened && isMenuOpen) {
      anime({
        targets: ".Menu .MenuButton",
        opacity: 1,
        translateY: [-20, 0],
        duration: 800,
        delay: anime.stagger(500, { start: 1000 }),
      });
      setHasOpened(true);
    }
  }, [isMenuOpen, hasOpened]);

  const selectPage = (event) => {
    const pageId = event.target.getAttribute("data-pageid");
    window.location.hash = pageId;
    setSelectedPage(pageId);
  };

  return (
    <nav className={`Menu ${isMenuOpen ? "Open" : ""}`}>
      <div className="MenuBackground"></div>
      <img src={profilePic} alt="Isaac drinking coffee" />
      <MenuButton onClick={selectPage} pageTitle="About Isaac" pageId="about">
        About Me
      </MenuButton>
      <MenuButton
        onClick={selectPage}
        pageId="projects"
      >
        Projects
      </MenuButton>
      <MenuButton
        onClick={selectPage}
        pageId="relax"
      >
        Relax
      </MenuButton>
      <MenuButton
        onClick={selectPage}
        pageId="privacy"
      >
        Privacy
      </MenuButton>
    </nav>
  );
};

export default Menu;
