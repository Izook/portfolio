import React from "react";
import anime from "animejs";

import Sprite from "./Sprite";

import "./Sprites.css";

const Sprites = () => {
  React.useEffect(() => {
    anime({
      targets: ".sprites",
    });
  }, []);

  return (
    <div className="sprites">
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
      <Sprite />
    </div>
  );
};

export default Sprites;
