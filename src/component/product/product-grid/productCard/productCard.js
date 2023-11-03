import React,{useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import "./productCard.css";

export const Productcard = (props) => {


   

     



    return (
        
        <Link to="/product" state={{ info:props.info }}className="product">
            <img className="image" alt="Image"  src={`https://drive.google.com/uc?export=view&id=${props.artwork}&amp;cache-control=max-age=172800`} />
            <div className="text-wrap">
                <p className="palak-and-dharmesh">
                    <span className="span">
                       {props.title}
                        <br />
                    </span>
                    <span className=" text-wrapper">{props.category}</span>
                </p>
                <div className="learn-more">
                    <div className="div">Learn More</div>
                    <img className="arrow-outward" alt="Arrow outward" src="arrow_outward.svg" />
                </div>
            </div>
        </Link>
    );
};
