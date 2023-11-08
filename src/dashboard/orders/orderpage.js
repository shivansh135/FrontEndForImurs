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
  

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const partnerId = props.data._id; // Replace with the actual partner ID

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}api/show-order/${partnerId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setOrders(data);
        setError(null);
        console.log(data)
      })
      .catch((error) => {
        setOrders([]);
        setError('Failed to fetch orders');
        console.error('Error fetching orders:', error);
      });
  }, [partnerId]);



  function mapStatusToString(status) {
    switch (status) {
        case 0:
            return "Fill Form";
        case 1:
        case 2:
            return "Track Order";
        case 3:
            return "Review";
        case 4:
        case 5:
            return "Track Order";
        case 6:
            return "Order Extra Copies";
        default:
            return "Unknown Status";
    }
}


  return (
    <Dashboard data={props.data}>
  {<NavLink to="/createOrder"><CreateOrder data={props.data} /></NavLink>}
  {showAlert && <div className="alert">Your Sample Will be Delivered Shortly</div>}
  <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: "20px" }}>
    {orders.map((order) => (
      <OrderCard key={order._id} order={order} status={mapStatusToString(order.orderStatus)} />
    ))}
  </div>
</Dashboard>

  );
};
