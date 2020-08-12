import React from "react";

import Sprite from "./Sprite";

import "./Sprites.css";

const spriteCount = 20;

const Sprites = () => {
  return (
    <div className="sprites">
      {[...Array(spriteCount)].map((e, i) => (
        <Sprite />
      ))}
    </div>
  );
};

export default Sprites;
