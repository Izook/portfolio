import React, { useState } from "react";

import Modal from "../Modals/Modal";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";

import "./App.css";
import ModalContainer from "../Modals/ModalContainer";

function App() {
  const [isMenuOpen, toggleMenuOpen] = useState(false);

  return (
    <div className="App">
      <Burger
        isMenuOpen={isMenuOpen}
        onClick={() => {
          toggleMenuOpen(!isMenuOpen);
        }}
      />
      <Menu isMenuOpen={isMenuOpen} />
      <ModalContainer>
        <Modal isGhost="true">
          <p>Hello! My name is Isaac Ortega!</p>{" "}
        </Modal>
        <Modal isGhost="true" isBackless="true">
          <p>This is my portfolio!</p>
        </Modal>
      </ModalContainer>
    </div>
  );
}

export default App;
