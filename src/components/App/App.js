import React from "react";

import Modal from "../Modal/Modal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Modal isGhost='true'>
        <p>Hello! My name is Isaac Ortega!</p>
      </Modal>
      <Modal isGhost='true' isBackless='true'>
        <p>This is my portfolio!</p>
      </Modal>
    </div>
  );
}

export default App;
