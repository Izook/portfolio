import React from "react";

import MenuButton from "./MenuButton";

import "./Menu.css";

import profilePic from "../../assets/profile.jpg";

const Menu = () => {
  return (
    <div className="Menu">
      <img src={profilePic} alt="Isaac drinking coffee" />
      <MenuButton>About Me</MenuButton>
      <MenuButton>Projects</MenuButton>
      <MenuButton>Resume</MenuButton>
      <MenuButton className="ContactMe">Contact Me</MenuButton>
    </div>
  );
};

export default Menu;
