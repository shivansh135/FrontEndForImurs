import PropTypes from "prop-types";
import React from "react";
import "./button1.css";

export const ButtonPrimary = ({ className, customStyle }) => {
  return (
    <div className={`button-primary ${className}`} style={customStyle}>
      <div className="text-wrapper">GET STARTED</div>
    </div>
  );
};


ButtonPrimary.propTypes = {
    text: PropTypes.string,
};
