import React from "react";

import "./Challenge.css";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const Challenge = () => {
  return (
    <PageBaseComponent className="Challenge">
      <ModalContainer>
        <Modal isGhost="true" isBackless="false">
          <p>So you think you can challenge me?</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Challenge;
