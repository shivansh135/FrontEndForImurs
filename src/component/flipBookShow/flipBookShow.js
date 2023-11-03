import React, { useState, useEffect } from "react";
import "./flipbookShow.css";
import { ButtonSecondary } from "../button/button";
import Flipbook from "../dearFlip/dearFlip";

export const FlipbookContainer = (props) => {
  console.log(props.source)
  const [showIframe, setShowIframe] = useState(true);
  const [showFlipbook, setShowFlipbook] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleButtonClick = () => {

    const iframeToObserve = document.getElementById('iframe');

    const editingarea = iframeToObserve.contentWindow.document.querySelector('#editing-area');
    console.log(iframeToObserve,editingarea)
    const textareas = editingarea.querySelectorAll("textarea");
    const textareaArray = Array.from(textareas);
    editingarea.style.opacity = '1';
    textareaArray.forEach((text)=>{
      text.style.opacity='0';
    })
    editingarea.style.scale = iframeToObserve.offsetWidth/793;
    // Sort the textarea elements based on their vertical position from the top of the page
    textareaArray.sort((a, b) => {
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();

      const aTop = aRect.top + window.scrollY;
      const bTop = bRect.top + window.scrollY;

      return aTop - bTop;
    });

    // Function to show textarea elements with a fade-in effect
    function fadeInTextarea(textarea, index) {
      setTimeout(() => {
        textarea.style.opacity = 1;
      }, index * 1000); // Delay each textarea by 500 milliseconds
    }

    // Loop through the sorted textarea elements and apply the fade-in effect
    textareaArray.forEach((textarea, index) => {
      fadeInTextarea(textarea, index);
    });

    setShowContent(false);
    setShowIframe(false);
    // Simulate the transition from iframe to Flipbook after 5 seconds
    setTimeout(() => {
      setShowFlipbook(true);
      document.getElementById('cover').style.opacity = '0';
      document.getElementById('cover').style.zIndex = '0';
      setTimeout(() => {
        document.querySelector('.df-ui-next').click();
      }, 800);
    }, 20000);
  };

  return (
    <div style={{position:"relative"}}>
    <div style={{width:'100%',margin:'auto',display:`${showIframe ? "none" : "block"}`}}>
        <div style={{opacity:`${showFlipbook ? "1" : "0"}`}}>
        <Flipbook source={props.source}/>

        </div>
        <div style={{position:'relative',margin:'auto',width:'fit-content'}}>
        <ButtonSecondary direction={true} to="/plans" text={'order now'}/>
        </div>
    </div>
      <div id='cover' className={`flipbook-container  ${showIframe?'':'absolute'}`}>
      <div className='iframe-container' >
        <iframe id="iframe" title="animation" className="flipbook" src="animation.html" />
      </div>
      <div className="content-container" style={{ display: showContent ? "flex" : "none" }}>
        <div className="cont">
          <div className="text-wrap">
            <div className="heading">Customized <br /> Beyond Imagination</div>
            <p className="tag" >Don’t trust us? Experience it live.</p>
          </div>
          <div className="center" style={{width:'fit-content'}} onClick={handleButtonClick}>
          <ButtonSecondary text={'tap to customize'} />
          </div>

        </div>
      </div>
    </div>
    </div>
    
  );
};
