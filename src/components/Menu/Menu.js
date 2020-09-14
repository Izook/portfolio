import React, { useEffect, useState } from "react";
import anime from "animejs";

import MenuButton from "./MenuButton";

import "./Menu.css";

import profilePic from "../../assets/profile.jpg";

const menuColors = ["#A3403B", "#B3AA40", "#8740B3", "#AD8A3E"];
const randomColor = () => {
  return menuColors[Math.floor(Math.random() * menuColors.length)];
};

const Menu = ({ isMenuOpen }) => {
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

  return (
    <div className={`Menu ${isMenuOpen ? "Open" : ""}`}>
      <div className="MenuBackground"></div>
      <img src={profilePic} alt="Isaac drinking coffee" />
      <MenuButton>About Me</MenuButton>
      <MenuButton>Projects</MenuButton>
      <MenuButton>Resume</MenuButton>
      <MenuButton isChallenge="true">Challenge</MenuButton>
      <MenuButton className="ContactMe">Contact Me</MenuButton>
    </div>
  );
};

export default Menu;
