import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css"


 


export const InfiniteMarquee = () => (
  <Marquee className="marquee-cont" direction="right">
    <div className="marquee">
      <div className="text-wrapper">Beyond Images</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Home Decor</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Investment in Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Guaranteed Returns</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Immaterialistic Gifting</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Beyond Images</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Home Decor</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Investment in Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Guaranteed Returns</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Immaterialistic Gifting</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Beyond Images</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Preserving Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Home Decor</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Investment in Memories</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Guaranteed Returns</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    <div className="marquee">
      <div className="text-wrapper">Immaterialistic Gifting</div>
      <img className="star" alt="Star" src="Marquee-Star.svg" />
    </div>
    
  </Marquee>
  
);

export const InfiniteIconMarquee = (props) => {
  const info = props.info;
  const infoTexts = [];
  const keys = Object.keys(info);
  const maxIndex = keys.length; // Define your maximum index, e.g., 35
  
  for (let i = 1; i <= maxIndex; i++) {
    if (i <= keys.length) {
      const text = info[`text${i}`]; // Access info.text1, info.text2, ..., info.textX
      if (text) {
        infoTexts.push(text);
      } else {
        break; // Stop the loop if a textX property is empty
      }
    } else {
      break; // Stop the loop when there are no more keys to access
    }
  }
  
  const displayElements = infoTexts.map((text, index) => (
    <div className="marquee" key={index}>
      <div className="text-wrapper">{text}</div>
      <img className="star" alt="Star" src={`product_icons/${index+1}.svg`} />
    </div>
  ));
  
  return (
    <Marquee className="marquee-cont-icon" direction="left">
      {displayElements}
      {displayElements}
      {displayElements}
    </Marquee>
  );
  
  }  

  export const ColabrationMarquee = () => {
    // Create an array of numbers from 1 to 10
    const imageNumbers = Array.from({ length: 10 }, (_, index) => index + 1);
  
    return (
      <Marquee  gradient={true} gradientColor={'var(--isabeline)'} gradientWidth={'70px'}>
        <div className="colab-marquee">
          {imageNumbers.map((number) => (
            <img
              key={number}
              className="colab-logo"
              src={`partnersmarquelogos/${number}.png`}
              alt="icon"
            />
          ))}
        </div>
      </Marquee>
    );
  };