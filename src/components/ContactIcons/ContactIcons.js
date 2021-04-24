import React from "react";
import ContactIcon from "./ContactIcon";

import "./ContactIcons.css";

import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import itchIcon from "../../assets/itchio.png";
import twitterIcon from "../../assets/twitter.png";

const ContactIcons = () => {
  return (
    <div className="ContactIcons">
      <ContactIcon
        icon={twitterIcon}
        url="https://twitter.com/izookojay"
        altText="Link to my twitter page"
      />
      <ContactIcon
        icon={itchIcon}
        url="https://izook.itch.io/"
        altText="Link to itch io page"
      />
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
    </div>
  );
};

export default ContactIcons;
