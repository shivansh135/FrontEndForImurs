import React from "react";
import "./partnerInvite.css";
import { ColabrationMarquee } from "../marquee/marquee";
import { ButtonSecondary } from "../button/button";

export const PartnerInvite_v0 = () => {
    return (
        <div className="partner">
            <img className="img" alt="Img" src="sampleSquare.jpg" />
            <div className="cont">
                <div className="heading">Become a Partner today</div>
                <p className="text">
                Transforming client’s experience with a personalised souvenir based on their story with your branding. Helps in converting effectively, increases referral and retention rates.
                </p>
                <div className="button-secondary">
                    <div className="become-a-partner">BECOME A PARTNER</div>
                </div>
            </div>
        </div>
    );
};


export const PartnerInvite = () => {
    return (
        <div className="partner" style={{backgroundColor:'transparent',justifyContent:'center',padding:'0px 30px'}}>
            <div className="cont" style={{justifyContent:'center',alignItems:'center',minWidth:'80%'}}>
                <div className="heading" style={{color:'var(--Jet-Black)',textAlign:'center'}}>Become a Partner today</div>
                <p className="text"  style={{color:'var(--Jet-Black)',textAlign:'center',minWidth:'none',maxWidth:'100%'}}>
                Transforming client’s experience with a personalised souvenir based on their story with your branding. Helps in converting effectively, increases referral and retention rates.
                </p>
            </div>
            <ColabrationMarquee/>
            <ButtonSecondary direction={true} to="/login" text={'Become a partner'}/>
        </div>
    );
};

