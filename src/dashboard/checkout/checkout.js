import React, { useEffect, useState } from 'react';
import { NavLink, redirect, useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { HedingSubheding } from '../../component/headings/heading';
import './checkout.css';
import { ButtonSecondary } from '../dash_buttons/buttons';
import { Dashboard } from '../structure/structure';

function CheckOut(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const MID = searchParams.get("MID");
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState({});
  useEffect(() => {
    // Make a POST request here and send MID as data
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'api/confPayment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ MID }),
        });

        if (response.ok) {
          // Request was successful
          // You can handle the response here
          const data = await response.json();
          console.log('Response:', data);

          // If the response status is 200, set showInvoice to true
          if (response.status === 200) {
            setShowInvoice(true);
            setInvoiceData(data)
            localStorage.setItem('refreshPage','true')
          }
        } else {
          // Handle errors here
          console.error('Request failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [MID]);

  return (
    <>
    {showInvoice ? (
        <B2Binvoice data={props.data} invoiceData={invoiceData} />
      ) : (
        <div className='body' style={{ justifyContent: 'center', paddingTop: '30%', alignItems: 'center' }}>
          <HedingSubheding heading="Processing" sub_heading="Processing Your payment, please wait!" />
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='var(--jet-black)'
            barColor='var(--newpersian-red)'
          />
          <HedingSubheding heading="" sub_heading="" />
          <HedingSubheding heading="" sub_heading="Please Don't Leave: you will automatically get redirected to the invoice" />
        </div>
      )}
    </>
      
   
  );
}

export const B2Binvoice = ({ data, invoiceData }) => {
  const redirected = invoiceData.redirectTo
  invoiceData = invoiceData.invoice
  function dateConvert(str){
    const date = new Date(str);

    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
  }
  function capitalizeWords(str) {
    const newStr = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    return str.split(' ')[0].toUpperCase() + " " +str.split(' ')[1]
  }
  
  return (
    <Dashboard data={data}>
      <div className="check-out">
        <div className="headder">
          <div className="div">
            <div className="headding">Order confirmed!</div>
            <div className="trans-ID">Transaction ID: {invoiceData.mid}</div>
          </div>
          <div className="date">{dateConvert(invoiceData.date)}</div>
        </div>
        <div className="teact-wrap">
          <div className="heading">Hello {invoiceData.name},</div>
          <p className="text">
            <span className="text-wrapper">Your order has been confirmed. Please forward to fill </span>
            <br></br>
            <span className="span">Abstract form</span>
          </p>
        </div>
        
        <div className="cont">
            <div className="img" />
            <div className='items'>
            {invoiceData.items.map((item, index) => (
            <div className='item'>
              <div className="div">
                <div className="heading-2">{capitalizeWords(item.name)}</div>
                <p className="sub-heading">{item.sub_headin}</p>
              </div>
              <div className="price">₹{item.price}</div>
            </div>
            ))}
            </div>
          </div>

        <div className="final-price">
          ₹{invoiceData.items.reduce((total, item) => total + item.price, 0)}
        </div>
        <NavLink to={redirected}>
        <ButtonSecondary text="GO TO ORDERS" />

        </NavLink>
      </div>
    </Dashboard>
  );
};


export default CheckOut;
