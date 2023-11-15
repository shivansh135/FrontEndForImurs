import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "./pricingD2C.css";

export const PricingCardNewD2C = (props) => {
  return (
    <div className="pricing-card-new-d2c" style={{color:props.flag===1?'white':'black'}}>
      <div className="datails">
        <div className="name-cont" style={{borderColor:props.flag===1?'white':'black'}}>
          <div className="name">{props.info.name}</div>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/pages.svg" style={{filter:props.flag===1?'brightness(100)':null}} />
            <div className="text">{props.info.pages} Pages</div>
          </div>
        </div>
       
        <div className="bullets" style={{opacity:props.id===0?0:1}}>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/1.svg" style={{filter:props.flag===1?'brightness(100)':null}} />
            <div className="text">HD Print</div>
          </div>
          <div className="svg-text">
            <img className="svg" alt="Svg" src="pricingD2C_icons/2.svg"style={{filter:props.flag===1?'brightness(100)':null}} />
            <div className="text">Matt Laminated</div>
          </div>
        
          <div className="svg-text" style={{opacity:props.id===2?1:0}}>
            <img className="svg" alt="Svg" src="pricingD2C_icons/3.svg" style={{filter:props.flag===1?'brightness(100)':null}} />
            <div className="text">Embossed Cover</div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <div className="price">
          <div className="value">{props.info.price}</div>
          <div className="actual-value">₹{props.info.price+1000}</div>
        </div>
        <div className="heading">each magazine</div>
        <div className="sub-heading">includes one print copy</div>
      </div>
    </div>
  );
};

export const CategoryCard = (props)=>{

  
return(
  <div className="category-card-stroke" >
      <img className="mag-svg" alt="Mag svg" src={`category_logo/${props.categoryName}.svg`} />
      <div className="mag-name">
        <div className="text-wrapper">{props.categoryName}</div>
        <div className="div">EDITION</div>
      </div>
    </div>
)
}

export const SuperCategory = (props)=>{
  return(
    <div className="super-category">
    <div className="icon-category-name">
      <img className="svg" style={{filter:'brightness(0.4)'}} alt="svg" src={`category_logo/${props.name}.svg`} />
      <div className="text-wrapper">{props.name}</div>
    </div>
    <div className="div">Select Sub - Category</div>
  </div>
  )
}

export const SubCategory = (props)=>{


  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const navigate = useNavigate();

  const plan = queryParams.get('plan');
  const categoryplan= queryParams.get('category');
  const handleCategoryClick = () => {
  
    navigate(`/checkout?plan=${plan}&category=${encodeURIComponent(props.subCategory._id)}&categoryname=${categoryplan}&subcategoryname=${props.subCategory.name}`);
  };
   








  return(
    <div className='sub-category-card'    onClick={() => handleCategoryClick()}>
      <img className="celebration" alt="Celebration" src='/magazineBlack.svg' />
      <div className='category-sub-text'>
        <p className="text-wrapper">{props.subCategory.name}</p>
        <p className="div">{props.subCategory.tag_line}</p>
      </div>
    </div>
  )
}