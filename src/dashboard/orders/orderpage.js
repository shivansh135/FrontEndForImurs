import { NavLink } from "react-router-dom"
import { ButtonBlack } from "../../component/button/button"
import { SimpleHeading } from "../../component/headings/heading"
import { CreateOrder, Reqsample } from "../Reqsamplenav/reqsample"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import { Dashboard } from "../structure/structure"

import React, { useState, useEffect } from 'react';

export const OrdersB2B = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Data to send to the backend
    const requestData = {
        _id:props.data._id
    };
  
    fetch(process.env.REACT_APP_API_URL + 'api/checkSample', {
      method: 'POST', // Use the appropriate HTTP method (e.g., POST)
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shouldShowAlert) {
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array indicates that this effect should run once when the component mounts
  

  return (
    <Dashboard data={props.data}>
      {props.data.isnew ? <Reqsample /> : <NavLink to="/createOrder"><CreateOrder data={props.data} /></NavLink>}
      {showAlert && <div className="alert">Your Sample Will be Delivered Shortly</div>}
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: "20px" }}>
        {/* Other content */}
      </div>
    </Dashboard>
  );
};
