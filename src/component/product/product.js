import React, { useEffect } from 'react'
import { InfiniteIconMarquee, InfiniteMarquee } from '../marquee/marquee'
import { PartnerInvite } from '../partnerInvite/partnerInvite'
import { ProductFlipBook } from './cards/productFlipbook/productFlipBook'
import { HedingSubheding, MainHeading } from '../headings/heading'
import { Feedback, FeedbackDynamic } from '../feedback/courosal/feedback-cards/card'
import Gridproduct from './cards/gridproduct/gridproduct'
import { useLocation } from 'react-router-dom'
import { FlipbookContainer } from '../flipBookShow/flipBookShow'
import { FeedbackNew } from '../feedback/courosal/feedback1-cards/card1'
import "./product.css"
export default function Product(props) {

  
  const location = useLocation();
  const info = location.state?.info;
  
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can use 'auto' for instant scrolling or 'smooth' for smooth scrolling
  });
  
  // Outputs "1Jbrp-s-HvqhVgWQZeDx9_vbvRKZAnGWP"
  
  const url = new URL("https://drive.google.com/file/d/1Jbrp-s-HvqhVgWQZeDx9_vbvRKZAnGWP/view?usp=drive_link");
  const pathname = url.pathname;
  const fileId = pathname.split("/")[3];

  

  return (
    <>

<div className='body' style={{ marginTop: "60px",display:'flex',flexDirection:'column',width:'100%'}}>
    <div/>
    <Gridproduct info={info}/>
    <HedingSubheding heading={info.title} sub_heading="Wedding Magazine"/>
    <ProductFlipBook text={info.discription} thumb={info.thumbnail} pdf={info.pdf}/>
    <div style={{display:'flex',flexDirection:'column',gap:'30px',width:'100%'}}>
    <InfiniteIconMarquee info={info.bullets}/>
    <InfiniteMarquee />
    </div>
    <MainHeading name={info.feedBackTitle}/>
    <div className='product-feedback-cont'>
       <FeedbackNew name={info.custmerName} text={info.feedBack} img={`https://drive.google.com/uc?export=view&id=${info.customerImg}&cache-control=max-age=172800)`} city={info.custmerCity}  />
    </div>
</div>
    </>
  )
}