import { useState } from "react"
import { MainHeading } from "../headings/heading"
import { CategoryCard, PricingCardNewD2C, SubCategory, SuperCategory } from "./card/pricingD2C"
import "./priced2c.css"
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom"

export const PriceD2C = () => {
  const navigate = useNavigate();

  const handleCardClick = (planId) => {
    // Perform any additional logic if needed
    // For example, you can save planId to state or perform other actions

    // Navigate to the desired route
    localStorage.setItem('continueOrderLink',`/category?plan=${planId}`)
    navigate(`/category?plan=${planId}`);
  };

  return (
    <div className="body">
      <MainHeading name="Select Your Edition" />
      <div className="priceD2C-cont">
        <div onClick={() => handleCardClick('1234567')}>
          <PricingCardNewD2C />
        </div>
        <div onClick={() => handleCardClick('12345678')}>
          <PricingCardNewD2C />
        </div>
        <div onClick={() => handleCardClick('12345789')}>
          <PricingCardNewD2C />
        </div>
      </div>
    </div>
  );
};



export const CategoryWindow = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const plan = queryParams.get('plan');
  const categories = ["Family", "Milestones", "Gifting", "Friendship", "Couple", "Travel"];
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // Perform any additional logic if needed
    // For example, you can save categoryName to state or perform other actions

    // Navigate to the desired route
    navigate(`/sub_category?plan=${plan}&category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="body">
      <MainHeading name="Select your category"/>
      {/* Your other components */}
      <div className="category-cont">
        {categories.map((categoryName, index) => (
          <div
            key={index}
            style={{ width: '46%' }}
            onClick={() => handleCategoryClick(categoryName)}
          >
            <CategoryCard categoryName={categoryName} />
          </div>
        ))}
      </div>
    </div>
  );
};



export const SubCategoryWindow = ()=>{
    return(
        <div className="body" style={{padding:'20px'}}>
            <MainHeading name="Select Sub-Category"/>
            <SuperCategory/>
            <SubCategory/>
            <SubCategory/>
        </div>
    )
}

const CustomRadio = ({ label, description, isSelected, onSelect }) => {
    return (
      <div className={`radio-checkout ${isSelected ? 'outline' : ''}`} onClick={onSelect}>
        <div className={`button ${isSelected ? 'checked' : ''}`}>
          {isSelected && <div className="fill"></div>}
        </div>
        <div className="text-wrap">
          <div className="heading">{label}</div>
          <p className="sub-heading">{description}</p>
        </div>
      </div>
    );
  };

export const D2COrdersummry = ()=>{
    const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
    return(
        <div className="body order-summry">
            <MainHeading name="Order Summry"/>
            <div className="cont">
                <img className="img" src="/physical_sample.jpg"></img>
                <div className="text-wrap">
                    <div className="heading">Imurs Iconic</div>
                    <div className="sub-heading">Sub-headin</div>
                    <div className="sub-heading">The power of something</div>
                </div>
            </div>
            <div className="bill">
                <div className="cont">
                    <div className="svg-text">
                        <img className="svg" src=""/>
                        <div className="text">12 Pages</div>
                    </div>
                    <div className="price">999</div>
                </div>
                <div className="cont">
                    <div className="svg-text">
                        <img className="svg" src=""/>
                        <div className="text">Delivery</div>
                    </div>
                    <div className="price">70</div>
                </div>
            <div className="total">1069</div>

            </div>
            
      <CustomRadio
        label="Pay Upfront"
        description="Pay the whole amount upfront and enjoy a 5% extra discount"
        isSelected={selectedOption === "upfront"}
        onSelect={() => handleSelect("upfront")}
      />
      <CustomRadio
        label="Pay Downfront"
        description="Pay the whole amount upfront and enjoy a 5% extra discount"
        isSelected={selectedOption === "downfront"}
        onSelect={() => handleSelect("downfront")}
      />
    
        </div>

    )
}