import React, { useEffect } from "react";
import "./productCard.css";
import { ButtonSecondary } from "../../../../dashboard/dash_buttons/buttons";
import { NavLink } from "react-router-dom";

export const Product = (props) => {


useEffect(() => {
 
console.log(props.artwork)
 
}, [props.artwork])




    return (
        <div className="product">
            <img className="image" alt="Image" src="sample.jfif" />
            <div className="text-wrap">
                <p className="palak-and-dharmesh">
                    <span className="text-wrapper">
                        Palak and Dharmesh
                        <br />
                    </span>
                    <span className="span">Souvenir Magazine</span>
                </p>
                <div className="learn-more">
                    <div className="div">Learn More</div>
                    <img className="arrow-outward" alt="Arrow outward" src="arrow_outward.svg" />
                </div>
            </div>
        </div>
    );
};

export const ProductDashbord = (props) => {


   console.log(props.product)
     
   
     

    
    
    
    
        return (
            <NavLink to='/product' state={{info:props.product}} className="product">
                <img className="image" alt="Image" src={`https://drive.google.com/uc?export=view&id=${props.product.thumbnail}&cache-control=max-age=172800`} />
                <div className="text-wrap">
                    <p className="palak-and-dharmesh">
                        <span className="text-wrapper">
                          {props.product.title}
                            <br />
                        </span>
                        <span className="span">Souvenir Magazine</span>
                    </p>
                    <div className="learn-more">
                    <div className="div">Learn More</div>
                    <img className="arrow-outward" alt="Arrow outward" src="arrow_outward.svg" />
                </div>
                </div>
            </NavLink>
        );
    }