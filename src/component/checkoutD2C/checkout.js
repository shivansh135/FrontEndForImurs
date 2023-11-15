import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import './checkout.css';
import { HedingSubheding } from '../headings/heading';
import { ButtonPrimary } from '../button/button';
function CheckOutD2C(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const MID = searchParams.get("MID");
  const [showInvoice, setShowInvoice] = useState(false);
  const [error, setError] = useState(null);
  const [invoiceData, setInvoiceData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + 'api/confPaymentSand', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ MID }),
        });

        if (response.ok) {
          const data = await response.json();

          if (response.status === 200) {
            setShowInvoice(true);
            setInvoiceData(data);
            localStorage.setItem('refreshPage', 'true');
          }
        } else {
          setError('Failed to process payment. Please try again later.');
          console.error('Request failed', response);
        }
      } catch (error) {
        setError('An error occurred while processing the payment. Please try again later.');
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [MID]);

  return (
    <>
      {error ? (
        <ErrorComponent message={error} />
      ) : (
        showInvoice ? (
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
        )
      )}
    </>
  );
}

const ErrorComponent = ({ message }) => (

  <div className='body error-container'>
    <p className='error-message'>{message}</p>
  </div>
);

// ... rest of your components remain the same


 const B2Binvoice = ({ data, invoiceData }) => {
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
    <div className='body' style={{padding:'25px'}}>
      <div className="check-out">
        <div className="headder">
          <div className="div">
            <div className="headding">Order confirmed!</div>
            <div className="trans-ID">Transaction ID: {invoiceData.mid}</div>
          </div>
          <div className="date">{dateConvert(invoiceData.date)}</div>
        </div>
        <div className="teact-wrap">
          <div className="heading">Thanks, {invoiceData.name}!</div>
          <p className="text">
            <span className="text-wrapper">
            We have received your order. Next you have to provide us the details. <br/><strong>Click here to get started.</strong>
            </span>
          </p>
        </div>
        
        <div className="cont">
            <div className="img" />
            <div className='items'>
            {invoiceData.items.map((item, index) => (
            <div className='item'>
              <div className="div">
                <div className="heading-2">{(item.name)}</div>
                <p className="sub-heading">{item.sub_headin}</p>
              </div>
              <div className="price">₹{item.price}</div>
            </div>
            ))}
            </div>
          </div>

        <div className="final-price">
          ₹{invoiceData.items.reduce((total, item) => parseInt(total) + parseInt(item.price), 0)}
        </div>
        <NavLink to={redirected}>
        <ButtonPrimary text="GO TO ORDERS" />

        </NavLink>
      </div>
    </div>
  );
};


export default CheckOutD2C;
