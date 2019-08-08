import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
