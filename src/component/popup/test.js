import React, { useState } from 'react';
import Popup from './popup'; // Assuming Popup component is in a separate file
import { ButtonSecondary } from '../button/button';

export const PopUpTest = ({ text, isConf, func,isCenter,meggage,heading }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleShowNotification = () => {
    setShowPopup(true);
    setIsNotification(true);
  };

  const handleShowConfirmation = () => {
    setShowPopup(true);
    setIsNotification(false);
  };

  const waitForConfirmation = () => {
    return new Promise((resolve) => {
      const handleConfirm = (result) => {
        setConfirmationResult(result);
        setShowPopup(false);
        resolve(result);
      };
      return handleConfirm;
    });
  };

  return (
    <>
      {isConf=="true" ? (
        <div onClick={handleShowConfirmation} style={{margin:(isCenter)?'auto':'none'}}>
          <ButtonSecondary text={text} />
        </div>
      ) : (
        <div onClick={handleShowNotification} style={{margin:(isCenter)?'auto':'none'}}>
          <ButtonSecondary text={text} />
        </div>
      )}
      <Popup
        show={showPopup}
        message={meggage}
        heading={heading}
        isNotification={isNotification}
        onConfirmPopup={(result) => {
          func()
          setShowPopup(false);
        }}
      />
    </>
  );
};
