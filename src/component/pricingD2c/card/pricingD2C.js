import React from "react";
import "./pricingD2C.css";

export const PricingCardNewD2C = () => {
  return (
    <div className="pricing-card-new-d2c">
      <div className="datails">
        <div className="name-cont">
          <div className="name">Iconic</div>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/pages.svg" />
            <div className="text">20 Pages</div>
          </div>
        </div>
        <div className="bullets">
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/1.svg" />
            <div className="text">HD Print</div>
          </div>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/2.svg" />
            <div className="text">Matt Laminated</div>
          </div>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/3.svg" />
            <div className="text">Embossed Cover</div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <div className="price">
          <div className="value">₹2299</div>
          <div className="actual-value">₹2999</div>
        </div>
        <div className="heading">each magazine</div>
        <div className="sub-heading">includes one print copy</div>
      </div>
    </div>
  );
};

export const CategoryCard = ({categoryName})=>{
return(
  <div className="category-card-stroke" >
      <img className="mag-svg" alt="Mag svg" src={`category_logo/${categoryName}.svg`} />
      <div className="mag-name">
        <div className="text-wrapper">{categoryName}</div>
        <div className="div">MAGAZINE</div>
      </div>
    </div>
)
}

export const SuperCategory = ()=>{
  return(
    <div className="super-category">
    <div className="icon-category-name">
      <img className="svg" alt="svg" src="celebration.png" />
      <div className="text-wrapper">BIRHTDAY MAGAZINE</div>
    </div>
    <div className="div">Select Sub - Category</div>
  </div>
  )
}

export const SubCategory = ()=>{
  return(
    <div className='sub-category-card'>
      <img className="celebration" alt="Celebration" src='/magazineBlack.svg' />
      <div className='category-sub-text'>
        <p className="text-wrapper">Based on your memories of both</p>
        <p className="div">A birthday magazine based on your memories with the birthday boy.</p>
      </div>
    </div>
  )
}