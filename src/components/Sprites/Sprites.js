import React from "react";
import uniqid from "uniqid";

import Sprite from "./Sprite";

import "./Sprites.css";

const spriteCount = 20;

const Sprites = () => {
  return (
    <div className="Sprites">
      {[...Array(spriteCount)].map((e, i) => {
        const spriteID = uniqid();
        return <Sprite id={spriteID} key={spriteID} />;
      })}
    </div>
  );
};

export default Sprites;
