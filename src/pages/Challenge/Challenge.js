import React from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const Challenge = () => {
  return (
    <PageBaseComponent className="Challenge">
      <ModalContainer>
        <Modal isGhost="true" isBackless="false">
          <p>So you think you can challenge me?</p>
          <p>(TODO: Add a game people can challenge me in here...)</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Challenge;
