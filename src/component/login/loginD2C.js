import React, { useState, useRef ,useEffect} from "react";
import "./login.css";

import { MainHeading } from "../headings/heading";
import { ButtonPrimary, ButtonSecondary } from "../button/button";
import pencil from './border_color.svg'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { isValidPhoneNumber } from "react-phone-number-input";
import { getCountryCallingCode } from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import {useNavigate} from 'react-router-dom';
import Popup from "../popup/popup";

export const OtpD2C = () => {
  const [otpFields, setOtpFields] = useState(["", "", "", "", "", ""]);
  const [isBlurred, setIsBlurred] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [flag,setflag] = useState(0);
  const [Value, setValue] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [Verify,setVerify] = useState(0);
  const local = window.location.href
  console.log(local)

  const startTimer = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    
    }
  };
 
  const handleInputChange = (value, index) => {
    // Check if the entered value is a number (0-9)
   
    if (/^[0-9]$/.test(value)) {
      // Update the corresponding OTP field
      const newOtpFields = [...otpFields];
      newOtpFields[index] = value;
      setOtpFields(newOtpFields);
  
      // Move to the next input field, regardless of whether it has a value
      if (index < 5) {
        // Check if the next input field already has a value
        if (otpFields[index + 1] === "") {
          inputRefs[index + 1].current.focus();
        } else {
          // Move to the next input field and insert the number
          newOtpFields[index + 1] = value;
          setOtpFields(newOtpFields);
          inputRefs[index + 1].current.focus();
        }
      }
    }
    else if(index<5)
    {
        const newOtpFields = [...otpFields];
        newOtpFields[index+1] = value%10;
        setOtpFields(newOtpFields);
        inputRefs[index + 1].current.focus();
    }
  };
  
const handleBackspace = (index, event) => {
  if (event.key === "Backspace" && index > 0) {
    // Prevent the default backspace behavior (e.g., going back in the browser)
    event.preventDefault();

    // Clear the current OTP field
    const newOtpFields = [...otpFields];
    newOtpFields[index] = "";
    setOtpFields(newOtpFields);
    
    

    // Move to the previous input field
    inputRefs[index - 1].current.focus();


  }
  else if(index==0)
  {
    const newOtpFields = [...otpFields];
    newOtpFields[index] = "";
    setOtpFields(newOtpFields);
    console.log(index)
    // Move to the previous input field
    inputRefs[0].current.focus();
  }
};
  

const hide = () => {

  if (Value > 0) {
    if (isValidPhoneNumber(Value)) {
      // If the phone number is valid, set the 'flag' state to 1
      setflag(1);
      const country=parsePhoneNumber(Value).country;
      const ccode = getCountryCallingCode(country);
      
      // Execute the POST request
      const postData = {
        phone: Value, 
        country:country,
        code:ccode,
        type:true
      };
      console.log(process.env.REACT_APP_API_URL+'api/sendOtp')
      fetch(process.env.REACT_APP_API_URL+'api/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            // Request was successful, handle the response here
            return response.json();
          } else {
            // Request failed, handle errors here
            alert('POST request failed');
          }
        })
        .then((data) => {
          // Handle the response data as needed
          setOTP_Valse(data.pass)
        setShowPopup(true)
          console.log(data);
          
         setSeconds(60);
       
        })
        .catch((error) => {
          // Handle network or other errors
          console.error('Error:', error);
        });
    } else {
      // If the phone number is not valid, show an alert
      alert('Invalid phone number');
    }
  } else {
    // If 'Value' is not greater than 0, show an alert
    alert('Invalid phone number');
  }
};


useEffect(() => {


  const timer = setInterval(startTimer, 1000);

  return () => {
 
    clearInterval(timer);
  };
}, [seconds]);


  const unhide=()=>
  {
       setflag(0);
   
  }

  const verify=()=>
  {
  
    setIsBlurred(true);
  

    const otp = otpFields.join('');
    console.log(otp);
    const postData = {
      phone: Value, 
      type:true,
      pass:otp
    };


    fetch(process.env.REACT_APP_API_URL+'api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful, handle the response here
          return response.json();
        } else {
          setIsBlurred(false);
          setShowPopup2(true);
          set_message('Verification failed. Please try again.')
        }
      })
      .then((data) => {
        // Handle the response data as needed
     
        if(data.success)
        {
          fetch(process.env.REACT_APP_API_URL+'api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
            credentials: 'include'
          })
            .then((response) => {
              if (response.ok) {
                // Request was successful, handle the response here
                return response.json();
              } else {
                // Request failed, handle errors here
                setIsBlurred(false);
                setShowPopup2(true);
                set_message('Wrong OTP.Verification filed please try again.')
                alert('POST request failed');
              }
            })
            .then((data) => {
              // Handle the response data as needed
              console.log(data);
  
                console.log('user data : ',data)
                localStorage.setItem('hasReloaded', false);
                window.location.reload()
              
             setSeconds(60);
           
            })
            .catch((error) => {
              // Handle network or other errors
              setIsBlurred(false);
              console.error('Error:', error);
            });
        }
 
      })
      .catch((error) => {
        // Handle network or other errors
        setIsBlurred(false);
        console.error('Error:', error);
      });
  
  
  

  }


  const resend=()=>
  {
    const otp = otpFields.join('');
    const country=parsePhoneNumber(Value).country;
    const ccode = getCountryCallingCode(country);
    const postData = {
      phone: Value, 
      country:country,
      type:true,
      pass:otp
    };


    fetch(process.env.REACT_APP_API_URL+'api/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful, handle the response here
          return response.json();
        } else {
          // Request failed, handle errors here
          alert('POST request failed');
        }
      })
      .then((data) => {
        // Handle the response data as needed
        console.log(data);
        setOTP_Valse(data.pass)
        setShowPopup(true)
        setSeconds(60);
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error:', error);
      });
  
        

  }

  const [showPopup, setShowPopup] = useState(false);
  const [OTP_Value,setOTP_Valse] = useState('000000')

  const [showPopup2, setShowPopup2] = useState(false);
  const [message,set_message] = useState('Something Went Wrong')


  return (
    <div className={`body otp-page ${isBlurred ? 'blur-effect' : ''}`} style={{ marginTop: '100px',paddingBottom:'450px' }}>

      <Popup
        show={showPopup}
        heading={'Hello'}
        message={'Your OTP for Login is '+OTP_Value}
        isNotification={true}
        onConfirmPopup={(result) => {
          setShowPopup(false);
        }}
      />
      <Popup
        show={showPopup2}
        heading={'Hello'}
        message={message}
        isNotification={true}
        onConfirmPopup={(result) => {
          setShowPopup2(false);
        }}
      />
       <MainHeading name="Sign in/Sign Up" />
       {flag==0?<div className="input-group">
        <div className="lable">Enter Phone Number</div>
        <PhoneInput
  international
  countryCallingCodeEditable={false}
  defaultCountry="IN"
  value={Value}
  onChange={setValue}/>
      </div>:null}
      {flag==0?<div className="bttn" onClick={hide}>
        <ButtonPrimary text='Get OTP'/>
      </div>:null}
      {flag===1?
      <div className="input-group">
        <div className="text-wraper" style={{ margin: "0" }}>
          OTP sent to{" "}
          <span className="link" onClick={unhide}>{Value}<img className="pencil" src={pencil}></img></span>
        </div>
        <div className="otp-input-cont">
          {otpFields.map((value, index) => (
            <input
              key={index}
              type="number"
              min={0}
              max={9}
              className="otp-input"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(index, e)}
              ref={inputRefs[index]}
            />
          ))}
        </div>
      </div>:null
}
{flag?<div className="bttn" onClick={verify}>
        <ButtonPrimary text='Verify' />
      </div>
      :null
}
{flag?  <div className="text-wraper">
    {seconds===0?<span className="link" onClick={resend} style={{marginTop:"-15px"}}> Resend OTP</span>:<span>Resend OTP in {seconds}s</span>}
      </div>:null}
      <div style={{display:'flex',flexDirection:'column',gap:'30px',width:'100%'}}></div>
    </div>
  );
};