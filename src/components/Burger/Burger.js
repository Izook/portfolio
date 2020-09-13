import React, { useState } from "react";

import "./Burger.css";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`Burger ${isOpen ? "Opened" : ""}`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="Top"></div>
      <div className="Middle"></div>
      <div className="Bottom"></div>
    </div>
  );
};

export default Burger;
