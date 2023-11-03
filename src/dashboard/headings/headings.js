
import './headings.css'
import React from "react";


export const Tag_1 = (props) => {
    return (
        <div className="tag1">
            <div className="text-wrapper">Hello {props.data.name.split(' ')[0]}</div>
            <div className="div">Welcome Back!</div>
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
