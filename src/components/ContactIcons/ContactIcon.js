import React from "react";

import "./ContactIcon.css";

const ContactIcons = ({ icon, url, altText }) => {
  return (
    <a href={url} className="ContactIcon">
      <img alt={altText} src={icon} />
    </a>
  );
};

export default ContactIcons;
