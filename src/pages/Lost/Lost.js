import React from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";

const Lost = () => {
  return (
    <PageBaseComponent className="Lost">
      <ModalContainer>
        <Modal isGhost="true" isBackless="false">
          <p>Are you lost friend???</p>
        </Modal>
      </ModalContainer>
    </PageBaseComponent>
  );
};

export default Lost;
