import React from "react";

import "./Projects.css";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const Projects = () => {
  return (
    <PageBaseComponent className="Projects">
      <ModalContainer>
        <Modal isGhost="true" isBackless="true">
          <p>Here are some of my latest projects:</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Projects;
