import PropTypes from "prop-types";
import React from "react";
import "./card1.css";
import { NavLink } from "react-router-dom";

export const FeedbackNew = ({name,text,city,img}) => {
    return (
        <div className="feedback-new">
            <img className="rectangle" alt="Rectangle" src={`${img}`}/>
                <div className="frame-2">
                    <div className="text-wrapper">{name}</div>
                </div>
                <p className="element-prestalo-onli">
                    {text}
                </p>
            <NavLink exact to="/login" className="get">{city}</NavLink>
        </div>
    );
};

FeedbackNew.propTypes = {
    rectangle: PropTypes.string, 
};
