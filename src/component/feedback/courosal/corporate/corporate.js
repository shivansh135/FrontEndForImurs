import React from "react";
import "./corporate.css";

export const Corporate = () => {
    return (
        <div className="corporate">
            <div className="corporate-wrapper">Corporate Plans</div>
            <div className="corporate-div">
                <div className="corporate-wrapper-2">Select the No Magazine           <svg
            className={`dropdown-arrow down`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20" // Adjust the width to your desired size
            height="20" // Adjust the height to your desired size
           
          >
            <path d="M7 10l5 5 5-5z" />
          </svg></div>
              
            </div>
            <p className="bundle">( Select a Bundle to view pricing )</p>
        </div>
    );
};

