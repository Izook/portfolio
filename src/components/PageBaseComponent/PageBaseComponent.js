import React from "react";

import "./PageBaseComponent.css";

const PageBaseComponent = ({ children, className }) => {
  return <div className={`Page ${className}`}>{children}</div>;
};

export default PageBaseComponent;
