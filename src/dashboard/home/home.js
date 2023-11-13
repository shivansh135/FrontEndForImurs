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
export const Banner = ({ heading, url, sub_heading,but=false, style = {} }) => {
    style['backgroundImage'] = `url('${url}')`;
  
    return (
      <div className="main-banner" style={style}>
        <div className="heading">{heading}</div>
        <div className="sub_heading">{sub_heading}</div>
        {but?<NavLink className="button" to="/createOrder">
          Start your edition
        </NavLink>:null}
        
      </div>
    );
  };
  

export const DashboardHome = (props)=>{
    console.log(props.data.isnew);
    return(
        <Dashboard data={props.data}>
            {props.data.isnew?<Reqsample/>:<CreateOrder data={props.data}/>}
            <Banner heading="Cherised Daily" sub_heading="Lighter then albums, heavier in memories." url="/banner/first_banner.JPG" but={true}/>
            <Banner heading="Beyond Images" sub_heading="Turn images into timeless decor art" url="banner/IMG_1021.JPG" but={true}/>
            <Banner heading="Time to bin the bulky" sub_heading="Still destining your artistic work here? " url="banner/_25476e1e-07cb-4fec-97f7-3af4e16e4aa9.jpeg.jpg" but={true}/>
            <Banner heading="Build a legacy" sub_heading="Have a magazine edition of your brand" url="banner/IMG_0888.jpg" but={true}/>
            {/* <div style={{display:'flex',gap:'24px'}}>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            </div> */}

          <div style={{display:'flex',flexDirection:'column', gap: window.innerWidth <= 768 ? '20px' : '40px' }}>
          <SimpleHeading text="Already making the noise"/>
            <div style={{display:'flex',width:'100%',overflowX:'auto',gap:'10px'}}>
            <DashboardFeedBack
          img="b2b feedbacks/Crescent/EOSR0320 (1).JPG"
          disc=" Wedding magazine editions that elevate our photography. Clients love the unique keepsake, reinforcing our brand beautifully.
          "
          name=" Aayush"
          partner="Crescent Studios"
          />
          <DashboardFeedBack 
          img="b2b feedbacks/Garima/WhatsApp Image 2023-11-07 at 10.49.05 PM.jpeg" 
          disc="The wedding magazine editions created are a perfect keepsake for our clients. It's a unique and cherished way to showcase our photography work. Definitely beyond albums.
       "
          name="   Garima"
          partner="The Eternal Bliss"
          />
          <DashboardFeedBack 
          img="b2b feedbacks/IWP/WhatsApp Image 2023-11-07 at 10.43.08 PM.jpeg" 
          disc=" Imurs delivers the perfect client gift with their beautifully curated wedding magazines. Clients are touched by the thoughtfulness and uniqueness.
           "
          name="Anant"
          partner="Indian Wedding Planners"
          /><DashboardFeedBack 
          img="b2b feedbacks/Jagrit/IMG_6607.JPG" 
          disc="I'm really impressed with the content and design of the magazine. The articles are engaging, the layout is visually appealing, and it exceeded my expectations. The must give souvenir to clients.
          "
          name=" Jagrit"
          partner="Wedding Mansion"
          /><DashboardFeedBack 
          img="b2b feedbacks/Nakul/IMG_4031.JPG" 
          disc="Our clients now receive more than just photos; they get a personalized masterpiece that enhances their entire experience. The wedding magazines are a game-changer!"
         
          name=" Nakul "
          partner="Diwan Photocreations"
          /><DashboardFeedBack 
          img="b2b feedbacks/Priyanka/thumbnail_PHOTO-2023-04-06-10-22-46.jpg" 
          disc="It is a wonderful experience working with team Imurs. It’s overwhelming to see the kind of response we received from our couples, families, & social media after adopting imurs magazines.
           
        "
          name="Priyanka"
          partner="Shaddi Ka Laddo"
          />
          <DashboardFeedBack 
          img="b2b feedbacks/Shahbaz/Untitled design - 6 (1).jpg" 
          disc="  The reaction from clients when they receive the personalized wedding magazines is priceless. It adds an extra layer of excitement and appreciation to our photography services.
          
          "
          name="Shahbaz"
          partner="Hawkeyed Photographers"
          />
          <DashboardFeedBack 
          img="b2b feedbacks/Snapsque/WhatsApp Image 2023-11-08 at 23.57.02_16988cc6.jpg" 
          disc="Impressed by the efficiency and professionalism of imurs. The entire process, from concept to delivery, was smooth, allowing us to provide a standout product to our clients.
          "
          name="Lalit"
          partner=" Snapsque"
          />
          </div>
            
            </div>
        </Dashboard>
    )
    
} 