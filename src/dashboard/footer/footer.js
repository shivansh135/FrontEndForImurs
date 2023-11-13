import React from "react";
import "./footer.css"
import { NavLink } from "react-router-dom";
export const Footer = () =>[
    <div className="dash-footer">
        <div className="link-cont">
            <NavLink to="/privacy" className="link">Privacy Policy</NavLink>
            <NavLink to="/refundpolicy" className="link">Cancellation & Refund Policy</NavLink>
            <NavLink to="/termsandconditions" className="link">Terms and Conditions</NavLink>
            <NavLink to="/contactus" className="link">Contact Us</NavLink>
        </div>
        <div className="icon-cont">
            <img src="social/insta.svg" alt="insta"/>
            <img src="social/fb.svg" alt="fb"/>
            <img src="social/twitter.svg" alt="tweet"/>
        </div>
    </div>
]