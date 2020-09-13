import React from "react";

import "./MenuButton.css";

const MenuButton = ({ children, className }) => {
  return (
    <div className="MenuButton">
      <div className="Square"></div>
      <button className={className}>{children}</button>
      <div className="Square"></div>
    </div>
  );
};

export default MenuButton;
