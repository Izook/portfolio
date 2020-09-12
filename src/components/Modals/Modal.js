import React, { useEffect } from "react";
import anime from "animejs";

import "./Modal.css";

const Modal = ({isGhost, isBackless, children}) => {
  const isGhostClass = isGhost ? "Ghost": "";
  const isBacklessClass = isBackless ? "Backless" : "";
  return (
    <div className={`Modal ${isGhostClass} ${isBacklessClass}`}>
      {children}
    </div>
  );
}

export default Modal;
