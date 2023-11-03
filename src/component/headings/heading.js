import React from "react";
import "./heading.css";

export const MainHeading = (props ) => {
    return (
        <div className="main-heading">
            <div className="text-wrapper">{props.name}</div>
        </div>
    );
};


export const HedingSubheding = (props) => {
    return (
        <div className="heding-subheding">
            <div className="headding">{props.heading}</div>
            <div className="sub-heading">{props.sub_heading}</div>
        </div>
    );
};

export const SimpleHeading = ({text}) =>{
    return (
        <div className="simple-heading">
            <div className="text-wrapper">{text}</div>
        </div>
    );
}