import PropTypes from "prop-types";
import React from "react";
import "./button1.css";

export const ButtonPrimary = (props) => {

const getstarted=()=>
{
  const paymentID = props.plan.id;
  const value = props.value
  const apiUrl = process.env.REACT_APP_API_URL + "api/payment";
   console.log(value)

  // Create a request object with the payment ID in the request body
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({ paymentID,value }),
    credentials: 'include',
  };
  
  fetch(apiUrl, requestOptions)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else if(response.status == 201){
        window.location = '/login'
      }
       else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
        window.location = data.url
      
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error("Error sending payment ID: " + error);
    });
  
}

  return (
    <div className={`button-primary`}  onClick={getstarted}>
      <div className="text-wrapper">GET STARTED</div>
    </div>
  );
};


ButtonPrimary.propTypes = {
    text: PropTypes.string,
};
