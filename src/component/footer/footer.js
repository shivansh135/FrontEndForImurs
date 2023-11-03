import PropTypes from "prop-types";
import React from "react";
import { Socials } from "../footer/social/social";
import "./footer.css";
import { NavLink } from "react-router-dom";

export const PropertyFooterWrapper = () => {
    return (
        <div className="footer">
            <div className="title-cont">
                <div className="title">IMURS</div>
                <p className="sub-title">REIMAGINING THE MAGAZINES WITH A SWEET TOUCH</p>
            </div>
            <div className="cont">
                <div className="social-media">
                <Socials className="frame" property1="default" text="INSTAGRAM" />
                <Socials className="frame" property1="default" text="FACEBOOK" />   
                <Socials className="frame" property1="default" text="INSTAGRAM" />
                <Socials className="frame" property1="default" text="FACEBOOK" />
                </div>
                <div className="about-us">
                    <a href="/privacy" className="text-wrapper">PRIVACY POLICY</a>
                    <a href="/refundpolicy" className="text-wrapper">CANCELLATION &amp; REFUND POLICY</a>
                    <a href="termsandconditions" className="text-wrapper">TERMS &amp; CONDITIONS</a>
                    <a href="/contactUs" className="text-wrapper">CONTACT US</a>
                </div>
            </div>
            <img className="star" alt="Star" src="star-5.png" />
        </div>
    );
};

export const FooterLanding = () => {
    return (
        <div className="footer-landing">
            <div className="text-wrap">
                <div className="heading">imurs</div>
                <div className="tag">Renovating Homes with Memories</div>
            </div>
            <div className="social-media">
                <a href="https://instagram.com/iamyourstory.in?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"><img src="social/insta_w.svg" alt="insta"/></a>
                <img src="social/fb_w.svg" alt="fb"/>
                <img src="social/twitter_w.svg" alt="tweet"/>
                <a href="https://www.linkedin.com/company/imurs/"><img src="social/linkdin_w.svg" alt="tweet"/></a>
            </div>
            <div className="cont">
                <div className="links-cont">
                    <NavLink exact to="/privacy" className="link">Privacy Policy</NavLink>
                    <NavLink exact to="/termsandconditions" className="link">Terms &amp; Conditions</NavLink>
                    <NavLink exact to="/refundpolicy" className="link">Refund Policy</NavLink>
                    <NavLink exact to="/contactus" className="link">Contact Us</NavLink>
                </div>
                <p className="copyrigth">
                    © All Rights Reserved.
                    <br />
                    All Memories Preserved.
                </p>
            </div>
        </div>
    );
}; 


PropertyFooterWrapper.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "footer"]),
    star: PropTypes.string,
};
