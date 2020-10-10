import React from "react";
import ContactIcon from "./ContactIcon";

import "./ContactIcons.css";

import phoneIcon from "../../assets/phone.png";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import emailIcon from "../../assets/email.png";

const ContactIcons = () => {
  return (
    <div className="ContactIcons">
      <ContactIcon
        icon={githubIcon}
        url="//github.com/Izook"
        altText="Link to my GitHub page"
      />
      <ContactIcon
        icon={linkedinIcon}
        url="//www.linkedin.com/in/isaac-ortega/"
        altText="Link to my LinkedIn page"
      />
      <ContactIcon
        icon={emailIcon}
        url="mailto:isaac.io.ortega@gmail.com?subject=Hello!"
        altText="Link to send me an email"
      />
      <ContactIcon
        icon={phoneIcon}
        url="tel:8587746244"
        altText="Link to call me"
      />
    </div>
  );
};

export default ContactIcons;
