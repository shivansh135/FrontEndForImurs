import PropTypes from "prop-types";
import React from "react";
import "./pricecard.css";

export const PriceCardA = ({ line = "line-15.svg", autoStories = "auto-stories.png" }) => {
    return (
        <>
        <div className="pricea-card">
            <div className="pricea-frame">
                <div className="pricea-text-wrapper">IMURS Iconic</div>
                <img className="pricea-line" alt="Line" src={line} />
                <div className="pricea-div">
                    <img className="pricea-auto-stories" alt="Auto stories" src={autoStories} />
                    <div className="pricea-button-label">12 Pages</div>
                </div>
            </div>
            <div className="pricea-frame-2">
                <div className="pricea-frame-3">
                    <div className="pricea-text-wrapper-2">₹999</div>
                    <div className="pricea-text-wrapper-3">₹1449</div>
                </div>
                <div className="pricea-text-wrapper-4">each magazine</div>
                <div className="pricea-text-wrapper-5">includes one print copy</div>
            </div>
        </div>
    




        </>

    );
};

PriceCardA.propTypes = {
    line: PropTypes.string,
    autoStories: PropTypes.string,
};
