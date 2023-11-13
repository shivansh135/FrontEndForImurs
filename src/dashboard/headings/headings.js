
import './headings.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Tag_1 = (props) => {
    const location = useLocation();

    const handleGoBack = () => {
        window.history.back(); // Go back to the previous page
    };

    return (
        <div className="tag1">
            {(location.pathname == '/' || location.pathname == '/dashboard')? <>
            <div className="text-wrapper">Hi {props.data.name.split(' ')[0]}!</div>
            <div className="div">Adopt light, chic magazines for daily nostalgia</div>
            </>:(
       <div className='op' style={{ display: 'flex', width:'100%', alignItems: 'center', flexDirection: 'row', gap: window.innerWidth <= 768 ? '10px' : '20px', fill:'var(--jet-black)' }}>
       <div onClick={handleGoBack}>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
       </div>
       <div className="navTitle" style={{ flex: 1, textAlign: 'center', margin: 'auto' }}>
         imurs
       </div>
     </div>
     
         
              
            )}

        </div>
    );
};


export const TagCredit = (props) => {
  return (
    <div className="tag-credit">
      <div className="sub-heading">Idyllic Credits left</div>
      <div className="heading">{props.data.credits} iCredits</div>
    </div>
  );
};

export const Tag_2 = () => {
    return (
        <div className="tag1">
            <div className="text-wrapper" style={{fontSize:'22px'}}>Hello Piyush</div>
            <div className="div">Welcome Back!</div>
        </div>
    );
};
