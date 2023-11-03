import PropTypes from "prop-types";
import React from "react";
import "./pricecard.css";

export const PriceCardB = ({
    line = "line-16.svg",
    autoStories = "auto-stories.png",
    img = "line-12.svg",
    hd = "hd.png",
}) => {
    return (
        <div className="priceb-card">
            <div className="priceb-frame">
                <div className="priceb-text-wrapper">IMURS Idyllic</div>
                <img className="priceb-line" alt="Line" src={line} />
                <div className="priceb-div">
                    <img className="priceb-img" alt="Auto stories" src={autoStories} />
                    <div className="priceb-button-label">16 Pages</div>
                    <img className="priceb-line-2" alt="Line" src={img} />
                    <div className="priceb-frame-2">
                        <img className="priceb-img" alt="Hd" src={hd} />
                        <div className="priceb-button-label-2">HD Print</div>
                    </div>
                </div>
            </div>
            <div className="priceb-frame-3">
                <div className="priceb-frame-4">
                    <div className="priceb-text-wrapper-2">₹1849</div>
                    <div className="priceb-text-wrapper-3">₹1999</div>
                </div>
                <div className="priceb-text-wrapper-4">each magazine</div>
                <div className="priceb-text-wrapper-5">includes one print copy</div>
            </div>
        </div>
    );
};

PriceCardB.propTypes = {
    line: PropTypes.string,
    autoStories: PropTypes.string,
    img: PropTypes.string,
    hd: PropTypes.string,
};
