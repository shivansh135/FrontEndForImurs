import React,{useState,useEffect} from "react";
import { ButtonPrimary } from "../../button1/button1";
import "./planCards.css";


export const PriceCard = (props) => {

    const [bullets, setBullets] = useState([]);

    useEffect(() => {
     
      const bulletsArray = props.bullets.split(",");
    
      
      const trimmedBulletsArray = bulletsArray.map((bullet) => bullet.trim());
    
     console.log(trimmedBulletsArray);
      setBullets(trimmedBulletsArray);
    }, [props.bullets]);
  


    return (
        <div className="price-card" style={{background:props.cardColor ,marginTop:(props.text==="Impression")?"0px":"none"}} >
            <div className="head">
                <div className="title">
                    <div className="text-wrapper">IMURS {props.text}</div>
                </div>
                <div className="icon">
                    {props.out==='sun.png'?
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 263">
<path id="Star 9" d="M30.5 0L33.9941 16.96L45.5 4.01924L40.0459 20.4541L56.4808 15L43.54 26.5059L60.5 30L43.54 33.4941L56.4808 45L40.0459 39.5459L45.5 55.9808L33.9941 43.04L30.5 60L27.0059 43.04L15.5 55.9808L20.9541 39.5459L4.51924 45L17.46 33.4941L0.5 30L17.46 26.5059L4.51924 15L20.9541 20.4541L15.5 4.01924L27.0059 16.96L30.5 0Z" fill="#F7F5F2"/>
<path id="Star 10" d="M30.4999 18.4614L31.8438 24.9845L36.2691 20.0073L34.1714 26.3284L40.4925 24.2307L35.5153 28.656L42.0383 29.9999L35.5153 31.3438L40.4925 35.7691L34.1714 33.6714L36.2691 39.9925L31.8438 35.0153L30.4999 41.5383L29.156 35.0153L24.7307 39.9925L26.8284 33.6714L20.5073 35.7691L25.4845 31.3438L18.9614 29.9999L25.4845 28.656L20.5073 24.2307L26.8284 26.3284L24.7307 20.0073L29.156 24.9845L30.4999 18.4614Z" fill="#B73E33"/>
</g>
</svg>:props.out==='newstar.png'?<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 261">
<path id="Star 7" d="M30 0L36.75 18.3087L55.9808 15L43.5 30L55.9808 45L36.75 41.6913L30 60L23.25 41.6913L4.01924 45L16.5 30L4.01924 15L23.25 18.3087L30 0Z" fill="#F7F5F2"/>
<path id="Star 8" d="M29.9999 18.4614L32.596 25.5032L39.9925 24.2307L35.1922 29.9999L39.9925 35.7691L32.596 34.4966L29.9999 41.5383L27.4037 34.4966L20.0073 35.7691L24.8076 29.9999L20.0073 24.2307L27.4037 25.5032L29.9999 18.4614Z" fill="#333332"/>
</g>
</svg>:
<div style={{ position: 'relative', width: '60px', height: '60px' }}>
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Star 6"
      d="M30 0L39.5459 20.4541L60 30L39.5459 39.5459L30 60L20.4541 39.5459L0 30L20.4541 20.4541L30 0Z"
      fill="#F7F5F2"
    />
  </svg>
  <svg
    style={{ position: 'absolute', top: "19px", left: "18px" }}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Star 5"
      d="M11.9999 0.461914L15.6714 8.32886L23.5383 12.0004L15.6714 15.6719L11.9999 23.5388L8.32837 15.6719L0.461426 12.0004L8.32837 8.32886L11.9999 0.461914Z"
      fill="#333332"
    />
  </svg>
</div>


}
                </div>
            </div>
            <div className="cont">
                <div className="text-wrap">
                    <p className="discription">{props.description}</p>
                    <div className="each-magazine">₹ {props.price}/ each magazine</div>
                    <div className="bullets-cont">
      {bullets.map((bullet, index) => (
        <div className="bullet" key={index}>
          <img className="check-circle" alt="Check circle" src="check-circle.png" />
          <div className="div">{bullet}</div>
        </div>
      ))}
    </div>
                </div>
                <ButtonPrimary/>
                
            </div>
        </div>
    );
};


export const PriceCard2 = (props) => {
    return (
        <div className="plan-card" style={{backgroundColor:props.cardColor,marginTop:props.flexmargin}}>
            <div className="plan-frame">
                <div className="plan-div-wrapper">
                    <div className="plan-text-wrapper" style={{color:props.cardColor}}>IMURS {props.text}</div>
                </div>
                <div className="plan-div">
                    <img className="plan-star" alt="Star" src={props.out} />
                    <img className="plan-img" alt="Star" src={props.in} style={{ height: props.in === 'transparent' ? 0 : 1 }} />
                </div>
            </div>
            <div className="plan-frame-2">
                <div className="plan-frame-3">
                    <p className="plan-p">Lorem ipsum dolor sit amet lorem ipsum dolor sit amer jixm</p>
                    <div className="plan-frame-4">
                        <div className="each-magazine">₹ -&nbsp;&nbsp;/ each magazine</div>
                       
                        <div className="plan-frame-5">
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">No of pages</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">HD Indigo Print</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">Regular Print</div>
                            </div>
                            <div className="plan-frame-6">
                                <img className="check-circle" alt="Check circle" src="check-circle.png"/>
                                <div className="plan-text-wrapper-2">Some Add Ons</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

/*PriceCard.propTypes = {
    star: PropTypes.string,
    img: PropTypes.string,
    line: PropTypes.string,
    checkCircle: PropTypes.string,
    checkCircle1: PropTypes.string,
    checkCircle2: PropTypes.string,
    checkCircle3: PropTypes.string,
};
*/