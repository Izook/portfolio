import React from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

import "./About.css";

const About = () => {
  return (
    <PageBaseComponent className="About">
      <ModalContainer>
        <Modal isGhost="true" isBackless="true">
          <p>Hello! My name is Isaac Ortega!</p>
        </Modal>
        <Modal isGhost="true" isBackless="true">
          <p>This is my portfolio!</p>
        </Modal>
        <Modal isGhost="true" isBackless="true">
          <p>I like to develop websites and video games! </p>
        </Modal>
        <Modal isGhost="true">
          <p>Check out the menu on the top left to learn more!</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default About;
