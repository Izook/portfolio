import React from "react";

import Modal from "../Modals/Modal";
import Menu from "../Menu/Menu";

import "./App.css";
import ModalContainer from "../Modals/ModalContainer";

function App() {
  return (
    <div className="App">
      <Menu />
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
