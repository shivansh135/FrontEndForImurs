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
export const DashboardHome = (props)=>{
    console.log(props.data.isnew);
    return(
        <Dashboard data={props.data}>
            {props.data.isnew?<Reqsample/>:<CreateOrder data={props.data}/>}
            <div className="body">
            <div className="main-banner" style={{backgroundImage:"url('banner1.jfif')"}}></div>
            <div className="main-banner" style={{backgroundImage:"url('banner6.jpeg')"}}></div>
            <div className="main-banner" style={{backgroundImage:"url('banner5.jfif')"}}></div>
            {/* <div style={{display:'flex',gap:'24px'}}>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            <div style={{width:'50%',aspectRatio:'494/282',backgroundColor:"var(--jet-black)"}}></div>
            </div> */}
            <SimpleHeading text="Happy Reviews"/>
            <div style={{display:'flex',width:'100%',overflowX:'auto',gap:'10px'}}>
                <div style={{width:'60%',flexShrink:'0'}}>
                    <FeedbackNew name="Mahi & Siddharth" img="feedbackimages/mahi_&_Siddharth.jpg" text="Reliving our special day through its pages brought tears and joy. Grateful!" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                <FeedbackNew name="Namita & Akshay" img="feedbackimages/Namita_&_Akshay.jpg"  text="Imurs exceeded expectations, beautifully curated. It's our love story in print!" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                <FeedbackNew name="Nitya and Shivam" img="feedbackimages/Nitya_&_Shivam.jpeg"  text="Our memories turned into a beautiful tangible keepsake. Loved this concept" city="Get Souvenir"/>
                </div>
                <div style={{width:'60%',flexShrink:'0'}}>
                    <FeedbackNew name="Harshita & Akhil" img="feedbackimages/Harshita_&_Akhil.jpg" text="Each page captured our love story perfectly. Cherished memories beautifully preserved!" city="Get Souvenir"/>
                </div>
            </div>
            </div>
        </Dashboard>
    )
    
} 