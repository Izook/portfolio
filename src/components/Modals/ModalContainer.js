import React, { useEffect } from "react";
import anime from "animejs";

import "./ModalContainer.css";

const ModalContainer = ({ children }) => {
  useEffect(() => {
    anime({
      targets: ".Modal.Ghost",
      opacity: 1,
      translateY: [-20, 0],
      duration: 2500,
      delay: anime.stagger(1500),
    });
  }, []);

  return <div className="ModalContainer">{children}</div>;
};

export default ModalContainer;
