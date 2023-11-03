import PropTypes from "prop-types";
import React from "react";
import "./pricecard.css";

export const PriceCardC= ({
    line = "line-17.svg",
    autoStories = "auto-stories.png",
    img = "line-12.svg",
    hd = "hd.png",
    star = "star.png",
    line1 = "image.svg",
    photoPrints = "photo-prints.png",
}) => {
    return (
        <div className="pricec-card">
            <div className="pricec-frame">
                <div className="pricec-text-wrapper">IMURS Impression</div>
                <img className="pricec-line" alt="Line" src={line} />
                <div className="pricec-frame-wrapper">
                    <div className="pricec-div-wrapper">
                        <div className="pricec-div">
                            <div className="pricec-frame-2">
                                <div className="pricec-frame-3">
                                    <img className="pricec-img" alt="Auto stories" src={autoStories} />
                                    <div className="pricec-button-label">20 Pages</div>
                                </div>
                                <img className="pricec-line-2" alt="Line" src={img} />
                                <div className="pricec-frame-4">
                                    <img className="pricec-hd" alt="Hd" src={hd} />
                                    
                                    <div className="pricec-button-label-2">HD Print</div>
                                </div>
                                <div className="frame-4">
                                    <img className="pricec-img" alt="Star" src={star} />
                                    <div className="pricec-button-label-2">Matt Laminated</div>
                                </div>
                                <img className="pricec-line-2" alt="Line" src={line1} />
                                <div className="pricec-frame-3">
                                    <img className="pricec-img" alt="Photo prints" src={photoPrints} />
                                    <div className="pricec-button-label">Embossed Cover</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricec-frame-5">
                <div className="pricec-frame-6">
                    <div className="pricec-text-wrapper-2">₹2299</div>
                    <div className="pricec-text-wrapper-3">₹2999</div>
                </div>
                <div className="pricec-text-wrapper-4">each magazine</div>
                <div className="pricec-text-wrapper-5">includes one print copy</div>
            </div>
        </div>
    );
};

PriceCardC.propTypes = {
    line: PropTypes.string,
    autoStories: PropTypes.string,
    img: PropTypes.string,
    hd: PropTypes.string,
    star: PropTypes.string,
    line1: PropTypes.string,
    photoPrints: PropTypes.string,
};
