import PropTypes from "prop-types";
import React from "react";
import "./button.css";
import { NavLink } from "react-router-dom";

export const ButtonSecondary = ({ className, customStyle, text, direction, to }) => {
  return (
    <NavLink to={direction ? to : ''} className={`button-secondary ${className}`} style={customStyle}>
      <div className="text-wrapper">{text || "order now"}</div>
    </NavLink>
  );
};



ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
