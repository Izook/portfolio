import React from "react";

import "./MenuButton.css";
import skull from "../../assets/skull.svg";

const MenuButton = ({ children, className, isChallenge }) => {
  const isChallengeClass = isChallenge ? "Challenge" : "";
  const isChallengeStyles = isChallenge
    ? { backgroundImage: `url(${skull})` }
    : {};
  return (
    <div className={`MenuButton ${isChallengeClass}`}>
      <div className="Square Left" style={isChallengeStyles}></div>
      <button className={className}>{children}</button>
      <div className="Square Right" style={isChallengeStyles}></div>
    </div>
  );
};

export default MenuButton;
