import React from "react";
import "./button.css";

export const ButtonSecondary = ({text}) => {
    return (
        <div className="button-secondary-dash">
            <div className="text-wrapper">{text}</div>
        </div>
    );
};

export const ButtonPrimary = ({text}) => {
    return (
        <div className="button-primary-dash">
            <div className="text-wrapper">{text}</div>
        </div>
    );
};
