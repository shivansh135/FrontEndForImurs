import React from 'react';
import './popup.css'
import { ButtonSecondary } from '../button/button';
import { HedingSubheding } from '../headings/heading';

const Popup = ({heading, message, isNotification, show, onConfirmPopup }) => {
  if (!show) {
    return null;
  }

  function onConfirm(value) {
    if (onConfirmPopup) {
      onConfirmPopup(value); // Call the provided onConfirmPopup function
    }
  }

  return (
    <div className="popup-cont">
      <div className="popup">
      <div className="heading">{heading}</div>
      <div className="text">{message}</div>
        {isNotification ? (
          <div className="accept-wrapper pointer" onClick={() => onConfirm(true)}>
            <div className="accept">OK</div>
          </div>
        ) : (
          <div className="popup-frame">
            <div className="button-mobile pointer" onClick={() => onConfirm(true)}>
              <div className="text-wrapper">DENY</div>
            </div>
            <div  className="accept-wrapper pointer" onClick={() => onConfirm(false)}>
              <div className="accept">ACCEPT</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Popup;
