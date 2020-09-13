import React, { useEffect } from "react";
import anime from "animejs";

import MenuButton from "./MenuButton";

import "./Menu.css";

import profilePic from "../../assets/profile.jpg";

const menuColors = ["#A3403B", "#B3AA40", "#8740B3", "#AD8A3E"];
const randomColor = () => {
  return menuColors[Math.floor(Math.random() * menuColors.length)];
};

const Menu = () => {
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

  return (
    <div className="Menu">
      <div className="MenuBackground"></div>
      <img src={profilePic} alt="Isaac drinking coffee" />
      <MenuButton>About Me</MenuButton>
      <MenuButton>Projects</MenuButton>
      <MenuButton>Resume</MenuButton>
      <MenuButton className="ContactMe">Contact Me</MenuButton>
    </div>
  );
};

export default Menu;
