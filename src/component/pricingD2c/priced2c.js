import { useState,useEffect } from "react"
import { BasicHeading, MainHeading } from "../headings/heading"
import { CategoryCard, PricingCardNewD2C, SubCategory, SuperCategory } from "./card/pricingD2C"
import "./priced2c.css"
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom"
import Success, { Loadin } from "../login/success"
import { ButtonPrimary } from "../button/button"

export const PriceD2C = () => {
  const navigate = useNavigate();


  
  // State to store the data from the API
  const [data, setData] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}api/d2cpricing`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setData(data);
     
      } catch (error) {
       console.log(error)
      }
    };
  
    fetchData();
  }, []);


  const [content,setcontent] = useState(null);
  const handleCardClick = (planId,planname) => {
   

      
      setcontent(planId);
        


  };

const buttonclick=()=>
{
  if(content!==null)
 {
  localStorage.setItem('continueOrderLink',`/category?plan=${content}`)
navigate(`/category?plan=${content}`);
 }

}

  
 







  return (
    <div className="body">
      <MainHeading name="Select Your Edition" />
      {data!==null ? <div className="priceD2C-cont">
      
       <div   style={{background:data.pricingData[0]._id===content?'var( --newjet-black)':null}}  onClick={() => handleCardClick(data.pricingData[0]._id, data.pricingData[0].name)}>
          <PricingCardNewD2C info={data.pricingData[0]} flag={data.pricingData[0]._id===content?1:0} id={0}/>
        </div>
        <div style={{background:data.pricingData[1]._id===content?'var( --newjet-black)':null}}  onClick={() => handleCardClick(data.pricingData[1]._id, data.pricingData[1].name)}>
          <PricingCardNewD2C info={data.pricingData[1]} flag={data.pricingData[1]._id===content?1:0} id={1}/>
        </div>
        <div style={{background:data.pricingData[2]._id===content?'var( --newjet-black)':null}}  onClick={() => handleCardClick(data.pricingData[2]._id, data.pricingData[2].name)}>
          <PricingCardNewD2C info={data.pricingData[2]} flag={data.pricingData[2]._id===content?1:0} id={2}/>
        </div>
         
      
 
      </div>:<Loadin></Loadin>}
      <div onClick={buttonclick} style={{width:'80%',margin:'auto'}}>
        <ButtonPrimary text="proceed"/>
      </div>  
    </div>
  );
};





export const CategoryWindow = () => {




  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);



  const plan = queryParams.get('plan');
  const planname = queryParams.get('planname')


 

 
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
   



  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);



  const name = queryParams.get('category');

  const [data, setData] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}api/parent`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        for (let i = 0; i < data.pricingData.length; i++) {
          if (data.pricingData[i].name.toLowerCase() === name.toLowerCase()) {
            setData(data.pricingData[i].child);
          }
        }
        
     
      } catch (error) {
       console.log(error)
      }
    };
  
    fetchData();
  }, []);


console.log(data)




    return(
        <div className="body" style={{padding:'20px',paddingBottom:'180px'}}>
            
            {data!==null?
            <>
            <div style={{width:'fit-content',margin:'auto'}}>
            <BasicHeading text="Select Sub-Category"/>
            </div>
            <SuperCategory name={name}/>
            <div className="sub-category-cont">
            
            {data.map((subCategory, index) => (
    <SubCategory key={index} subCategory={subCategory} />
  ))}
            </div>
            
  </>:<Loadin></Loadin>
          }
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

  export const D2COrdersummry = () => {
    const [selectedOption, setSelectedOption] = useState('upfront');
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const plan = queryParams.get("plan");
    const category = queryParams.get("category");
    const categoryplan = queryParams.get("categoryname");
    const subcategoryplan = queryParams.get("subcategoryname");
    const [data, setData] = useState(null);
    const [discount, setDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
  


    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiUrl = process.env.REACT_APP_API_URL;
          const response = await fetch(`${apiUrl}api/d2cpricing`);
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          for (let i = 0; i < data.pricingData.length; i++) {
            if (data.pricingData[i]._id === plan) {
              setData(data.pricingData[i]);
              setDiscount(Math.ceil(data.pricingData[i].price * 0.05));
            }
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }, []);
    
    const pay = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/paymentD2C`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan,
            category,
            selectedOption,
            couponCode
          }),
          credentials: 'include',
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        
        // Check if responseData has the expected structure before accessing its properties.
        if (responseData  && responseData.url) {
          window.location.href = responseData.url;
        } else {
          console.error('Unexpected response data:', responseData);
          // Handle unexpected response data as needed
        }
      } catch (error) {
        console.error('Error during fetch:', error);
        // Handle the error as needed
      }
    };
    
    const applyCoupon = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/applyCoupon`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            couponCode,
          }),
          credentials: 'include',
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const couponData = await response.json();
  
        // Check if couponData has the expected structure before accessing its properties.
        if (couponData && couponData.valid && couponData.discount) {
          setAppliedCoupon(couponData);
        } else {
          console.error('Invalid coupon data:', couponData);
          // Handle invalid coupon as needed
        }
      } catch (error) {
        console.error('Error during coupon fetch:', error);
        // Handle the error as needed
      }
    };
  

    const calculateTotal = () => {
      const deliveryCharge = 70;
      const magazinePrice = data.price;
      let total = magazinePrice;
    
      if (appliedCoupon && appliedCoupon.valid) {
        // Check if the coupon discount exceeds the total magazine price
        if (appliedCoupon.discount > total) {
          total = 0;
        } else {
          total -= appliedCoupon.discount;
        }
      }
    
      if (selectedOption === "upfront" && total > deliveryCharge) {
        // Apply 5% discount for upfront payment
        total -= discount;
      }
    
      return total + deliveryCharge;
    };
    
  
    const calculatePayableAmount = () => {
      if (selectedOption === "downfront") {
        // Show payable amount as half of the total
        return Math.ceil(calculateTotal() / 2);
      } else {
        // For other options, payable amount is the same as the total
        return calculateTotal();
      }
    };
  
    const handleSelect = (option) => {
      setSelectedOption(option);
      if (option === "upfront") {
        setDiscount(Math.ceil(data.price * 0.05));
      } else {
        setDiscount(0);
      }
    };
  
    return data !== null ? (
      <div className="body order-summry">
        <MainHeading name="Order Summary" />
  
        <div className="cont">
          <img className="img" src="/physical_sample.jpg" alt="Magazine Cover" />
          <div className="text-wrap">
            <div className="heading">Imurs {data.name}</div>
            <div className="sub-heading">{data.description}</div>
            <div className="sub-heading">{categoryplan}</div>
            <div className="sub-heading">{subcategoryplan}</div>
          </div>
        </div>
  
        <div className="bill">
          <div className="cont">
            <div className="svg-text">
              <img className="svg" src="/magazineBlack.svg" alt="Magazine Icon" />
              <div className="text">{data.pages} Pages</div>
            </div>
            <div className="price">₹ {data.price}</div>
          </div>
  
          <div className="cont">
            <div className="svg-text">
              <div className="text">Delivery</div>
            </div>
            <div className="price">₹ 70</div>
          </div>

          {appliedCoupon && appliedCoupon.valid && (
            <div className="cont">
            <div className="svg-text">
              <div className="text">Coupon Applied</div>
            </div>
            <div className="price">- ₹ {appliedCoupon.discount}</div>
          </div>
          )}
  
          <div className="cont">
            <div className="svg-text">
              <div className="text">Upfront Saving</div>
            </div>
            <div className="price">- ₹ {discount}</div>
          </div>
  
          <div className="total">
            <span>Total</span>
            <span>₹ {calculateTotal()}</span>
          </div>
  
          {selectedOption === "downfront" && (
            <div className="total" style={{ color: 'var(--persian-red)', border: 'none', padding: '0' }}>
              <span>Current Payable</span>
              <span>₹ {calculatePayableAmount()}</span>
            </div>
          )}
          {appliedCoupon && appliedCoupon.discount + discount > data.price  && (
            <div className="total" style={{ color: 'var(--persian-red)', border: 'none', padding: '0' }}>
              <span>Max Discount</span>
              <span>₹ {data.price}</span>
            </div>
          )}
        </div>
  
        <div className="coupan-cont">
        <div className="heading">Nostalgic Deals</div>
        <div className="input-cont">
          <input
            type="text"
            className="cupanCode"
            placeholder="APPLY COUPON"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <div className="but" onClick={applyCoupon}>
            Apply
          </div>
        </div>
        {appliedCoupon && appliedCoupon.valid && (
          <div className="applied-coupon">
            Applied Coupon: - ₹ {appliedCoupon.discount}
          </div>
        )}
      </div>
  
        <CustomRadio
          label="Pay 50%-50%"
          description="Start customization with 50% now, complete the payment on delivery."
          isSelected={selectedOption === "downfront"}
          onSelect={() => {
            handleSelect("downfront");
          }}
        />
        <CustomRadio
          label="Pay Upfront"
          description="Save 5% upfront—a nod to nostalgia, wrapped in savings"
          isSelected={selectedOption === "upfront"}
          onSelect={() => {
            handleSelect("upfront");
          }}
        />
        <div className="proceed-button" onClick={()=>{pay()}}>
          Pay ₹ {calculatePayableAmount()}
        </div>
      </div>
    ) : (
      <Loadin />
    );
  };
  
  