import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import { Rotate } from 'hammerjs';

const CustomDropdown = ({ sequence,lable,options, selectedValue, onSelect, dropdownStyle, optionStyle,recommend }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    setIsOpen(false);
    onSelect(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add a click event listener to the document
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleDocumentClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Add custom styles to the dropdown and options
  const dropdownStyles = {
    display: isOpen ? 'flex' : 'none',
    ...dropdownStyle,
  };

  const optionStyles = {
    cursor: 'pointer',
    ...optionStyle,
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="lable">
        {!sequence?null:<span className="sequence">{sequence}</span>}
        {lable}
      </div>
      <div className="selected-value" onClick={toggleDropdown}>
        <span style={{opacity:'0.8'}}>{selectedValue}</span>
        <span style={{transform:'rotate(180deg)'}}>▲</span>
      </div>
      <div className="dropdown" style={dropdownStyles}>
      {options.map((option, index) => (
  <div 
    className='dropdown-option'
    key={index}
    style={optionStyles}
    onClick={() => handleSelect(option)}
  >
    {option}<br/>
    {(index==recommend)?<span style={{fontSize:'7px',opacity:'0.5',fontStyle:'italic'}}> - Recomm.</span>:''}
  </div>
))}

      </div>
    </div>
  );
};

export default CustomDropdown;
