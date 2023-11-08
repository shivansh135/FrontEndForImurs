import { useState ,useEffect} from "react"
import { NavLink } from "react-router-dom"
import { ButtonBlack } from "../../component/button/button"
import { FeedbackNew } from "../../component/feedback/courosal/feedback1-cards/card1"
import { SimpleHeading } from "../../component/headings/heading"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import {Reqsample,CreateOrder} from "../Reqsamplenav/reqsample"
import { Dashboard } from "../structure/structure"
import "./home.css"
import { DashboardFeedBack } from "../cards/feedback/feedback"
import { OrderCardV2 } from "../cards/ordercardv2"
export const Banner = ({ heading, url, sub_heading, style = {} }) => {
    style['backgroundImage'] = `url('${url}')`;
  
    return (
      <div className="main-banner" style={style}>
        <div className="heading">{heading}</div>
        <div className="sub_heading">{sub_heading}</div>
        <NavLink className="button" to="/createOrder">
          Start your edition
        </NavLink>
      </div>
    );
  };
  

export const DashboardHome = (props)=>{
    console.log(props.data.isnew);
    return(
        <Dashboard data={props.data}>
            {props.data.isnew?<Reqsample/>:<CreateOrder data={props.data}/>}
            <div className="body">
            <Banner heading="Cherised Daily" sub_heading="Lighter then albums, heavier in memories." url="banner1.jfif"/>
            <Banner heading="Cherised Daily" sub_heading="Lighter then albums, heavier in memories." url="banner6.jpeg"/>
            <Banner heading="Cherised Daily" sub_heading="Lighter then albums, heavier in memories." url="banner5.jfif"/>
            {/* <div style={{display:'flex',gap:'24px'}}>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            </div> */}

           <OrderCardV2/>
            <SimpleHeading text="Happy Reviews"/>
            <div style={{display:'flex',width:'100%',overflowX:'auto',gap:'10px'}}>
            <DashboardFeedBack
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          />
          <DashboardFeedBack 
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          />
          <DashboardFeedBack 
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          /><DashboardFeedBack 
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          /><DashboardFeedBack 
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          /><DashboardFeedBack 
          img="sample.jfif" 
          disc="Lighter then albums, heavier in memories.Lighter then albums, heavier in memories.Lighter then albums, heavier in memories."
          name="Rajim Ronak"
          partner="Slitz Studios"
          />
            </div>
            
            </div>
        </Dashboard>
    )
    
} 