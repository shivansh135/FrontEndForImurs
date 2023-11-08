import React from "react";
import "./ordercardv2.css";

export const OrderCardV2 = () => {
    return (
        <div className="order-cardV2">
            <div className="image" />
            <div className="cont">
                <div className="text-wrap">
                    <div className="main-cont">
                        <div className="group">
                            <div className="overlap-group">
                            </div>
                        </div>
                        <p className="name">
                            <span className="text-wrapper">
                                Payal &amp; Mukesh
                                <br />
                            </span>
                            <span className="span">Sep 20, 2023</span>
                        </p>
                    </div>
                    <div className="flex">
                        <div className="div">
                            <div className="text">ORDER STATUS</div>
                            <div className="status-cont">
                                <img className="icon" alt="Icon" src="logos/status/active.svg" />
                                <div className="status">ACTIVE</div>
                            </div>
                        </div>
                        <div className="share">
                            <img className="img" alt="Share" src="share.svg" />
                        </div>
                    </div>
                </div>
                <div className="button">
                    <div className="text-2">ORDER EXTRA COPY</div>
                </div>
            </div>
        </div>
    );
};
