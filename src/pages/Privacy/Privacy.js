import React, { useState } from "react";

import PageBaseComponent from "../../components/PageBaseComponent/PageBaseComponent";
import ModalContainer from "../../components/Modals/ModalContainer";
import Modal from "../../components/Modals/Modal";
import CookieBanner from "../../components/CookieBanner/CookieBanner";



const Privacy = () => {

  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const optOut = () => {
    window['ga-disable-UA-162642839-1'] = true;
    setShowCookieBanner(true);
    document.cookie = "IZOOK_OPT_OUT=true";
  };

  return (
    <PageBaseComponent className="Privacy">
      <ModalContainer>
        <Modal isGhost="true" isBackless="true">
          <p>I use google analytics to see who visits my pages.</p>
        </Modal>
        <Modal isGhost="true" isBackless="true">
          <p>If you don't want to be tracked please click the following button:</p>
        </Modal>
        <Modal isGhost="true" isBackless="true">
          <button onClick={optOut}>OPT OUT</button>
        </Modal>
      </ModalContainer>
      <CookieBanner showBanner={showCookieBanner} setShowCookieBanner={setShowCookieBanner}/>
    </PageBaseComponent>
  );
};

export default Privacy;
