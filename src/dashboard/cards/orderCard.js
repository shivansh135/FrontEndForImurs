import React from "react";
import "./orderCard.css";
import { ButtonSecondary } from "../dash_buttons/buttons";

export const OrderCard = () => {
    return (
        <div className="order-card">
            <div className="poster" />
            <div className="cont">
                <img className="star" alt="Star" src="/logos/plansymbol/idyllic.svg" />
                <div className="date">25, JAN 2023</div>
                <p className="text-wrap">
                    <span className="text-wrapper">
                        Payal &amp; Mukesh
                        <br />
                    </span>
                    <span className="span">Wedding Magazine</span>
                </p>
                <ButtonSecondary text='order extra copies'/>
                <div className="status">
                    <div className="hedding">ORDER STATUS</div>
                    <div className="flex-text">
                        <img className="icon" alt="Icon" src="tick.svg" />
                        <div className="text">READY</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
