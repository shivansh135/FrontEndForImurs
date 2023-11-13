import PropTypes from "prop-types";
import React from "react";
import "./button.css";
import { NavLink } from "react-router-dom";

export const ButtonSecondary = ({ className, customStyle, text, direction, to }) => {
  return (
    <NavLink to={direction ? to : ''} className={`button-secondary ${className}`}>
      <div className="text-wrapper" >{text || "order now"}</div>
    </NavLink>
  );
};

export const ButtonPrimary = ({ className, customStyle, text, direction, to }) => {
  return (
    <NavLink to={direction ? to : ''} className={`button-primary ${className}`} style={customStyle}>
      <div className="text-wrapper">{text || "order now"}</div>
    </NavLink>
  );
};

export const ButtonPrimarySmall = ({text}) => {
  return (
      <div className="button-primary-small">
          <div className="text-wrapper">{text}</div>
      </div>
  );
}


ButtonSecondary.propTypes = {
    text: PropTypes.string,
};
