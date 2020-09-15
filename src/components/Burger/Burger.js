import React from "react";

import "./Burger.css";

const Burger = ({ isMenuOpen, onClick }) => {
  return (
    <div className={`Burger ${isMenuOpen ? "Open" : ""}`} onClick={onClick}>
      <div className="Top"></div>
      <div className="Middle"></div>
      <div className="Bottom"></div>
    </div>
  );
};

export default Burger;
