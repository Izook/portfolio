import React from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const Relax = () => {
  return (
    <PageBaseComponent className="Relax">
      <ModalContainer>
        <Modal isGhost="true" isBackless="false">
          <p>Sometimes I like to just appreciate the sprites.</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Relax;
