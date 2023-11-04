import { useState,useEffect } from "react";
import "./orderCard.css";
import { ButtonSecondary } from "../dash_buttons/buttons";





export const OrderCard = () => {
    
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

const [order, setOrder] = useState(0);
const [error, setError] = useState(null);

useEffect(() => {
  const orderId = '653ebbf47cb31f42ddffb45a'; // Replace with the actual order ID you want to fetch
  const apiUrl = process.env.REACT_APP_API_URL + `api/show-order/${orderId}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setOrder(data);
      console.log(data)
      setError(null);
    })
    .catch((error) => {
      setOrder(null);
      setError('Failed to fetch order details');
      console.error('Error fetching order:', error);
    });
}, [order]);

    return (
        <div className="order-card">
            <div className="poster" />
            <div className="cont">
                <img className="star" alt="Star" src="/logos/plansymbol/idyllic.svg" />
                <div className="date">25, JAN 2023</div>
                <p className="text-wrap">
                    <span className="text-wrapper">
                        Payal &amp; Mukesh
                        <br />
                    </span>
                    <span className="span">Wedding Magazine</span>
                </p>
                <ButtonSecondary text={mapStatusToString(order.orderStatus)}/>
                <div className="status">
                    <div className="hedding">ORDER STATUS</div>
                    <div className="flex-text">
                        <img className="icon" alt="Icon" src="tick.svg" />
                        <div className="text">READY</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
