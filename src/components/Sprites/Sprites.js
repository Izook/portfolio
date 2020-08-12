import React from "react";
import uniqid from "uniqid";

import Sprite from "./Sprite";

import "./Sprites.css";

const spriteCount = 20;

const Sprites = () => {
  return (
    <div className="sprites">
      {[...Array(spriteCount)].map((e, i) => {
        const spriteID = uniqid();
        return <Sprite id={spriteID} key={spriteID} />;
      })}
      id=
    </div>
  );
};

export default Sprites;
