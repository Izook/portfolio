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
    setSelectedPage(pageId);
  };

  return (
    <div className={`Menu ${isMenuOpen ? "Open" : ""}`}>
      <div className="MenuBackground"></div>
      <img src={profilePic} alt="Isaac drinking coffee" />
      <MenuButton onClick={selectPage} pageId="About">
        About Me
      </MenuButton>
      <MenuButton onClick={selectPage} pageId="Projects">
        Projects
      </MenuButton>
      <MenuButton onClick={selectPage} pageId="Challenge" isChallenge={true}>
        Challenge
      </MenuButton>
    </div>
  );
};

export default Menu;
