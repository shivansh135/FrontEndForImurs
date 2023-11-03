import React from "react";
import "./card.css";
import { ButtonSecondary } from "../../dash_buttons/buttons";
import { NavLink } from "react-router-dom";

export const CardPortfolio = (props) => {
    console.log(props.product)
    return (
        <div className="display-card">
            <div className="img" style={{backgroundImage:`url('https://drive.google.com/uc?export=view&id=${props.product.thumbnail}&cache-control=max-age=172800')`}}/>
            <div className="cont">
                <img className="logo" alt="Logo" src={`https://drive.google.com/uc?export=view&id=${props.product.partnerLogo}&cache-control=max-age=172800`} />
                <div className="heading">
                    {props.product.title}
                    <br />
                    {props.product.category}
                </div>
                <div className="text">
                {props.product.discription}
                </div>
                <div className="button-secondaryB">
                 <NavLink to='/product' state={{info: props.product}} className="text-wrapper">VIEW FULL MAGAZINE</NavLink>
                </div>
            </div>
        </div>
    );
};