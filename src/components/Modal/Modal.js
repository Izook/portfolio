import React, { useEffect } from "react";
import anime from "animejs";

import "./Modal.css";

const Modal = ({isGhost, isBackless}) => {

  useEffect(() => {
    if(isGhost){
      console.log("WOAHS");
      anime({
        targets: '.Modal.Ghost',
        opacity: 1,
        translateY: [-20, 0],
        duration: 2500,
      })
    }
  }, [isGhost]);

  const isGhostClass = isGhost ? "Ghost": "";
  const isBacklessClass = isBackless ? "Backless" : "";

  return (
    <div className={`Modal ${isGhostClass} ${isBacklessClass}`}>
      <p>Hello! My name is Isaac Ortega!</p>
    </div>
  );
}

export default Modal;
