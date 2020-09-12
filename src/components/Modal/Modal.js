import React, { useEffect } from "react";
import anime from "animejs";

import "./Modal.css";

const Modal = ({isGhost}) => {

  useEffect(() => {
    if(isGhost){
      anime({
        targets: '.Modal.Ghost',
        opacity: 1,
        marginTop: 0,
        duration: 2500,
      })
    }
  }, [isGhost]);

  return (
    <div className={`Modal ${isGhost ? "Ghost": ""}`}>
      <p>Hello! My name is Isaac Ortega!</p>
    </div>
  );
}

export default Modal;
