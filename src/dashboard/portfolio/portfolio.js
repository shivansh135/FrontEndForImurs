import { ButtonBlack } from "../../component/button/button"
import { FeedbackNew } from "../../component/feedback/courosal/feedback1-cards/card1"
import { SimpleHeading } from "../../component/headings/heading"
import { OrderCard } from "../cards/orderCard"
import { ButtonPrimary, ButtonSecondary } from "../dash_buttons/buttons"
import { TagCredit, Tag_1 } from "../headings/headings"
import Profile_Settings from "../profileSetting/form"
import { Dashboard } from "../structure/structure"
import { CardPortfolio } from "./portfolioCard/card"

export const Portfolio = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div className="body">
            <div className="main-banner" style={{backgroundImage:"url('portfolio-banner.jpg')",backgroundPositionY:'0'}}></div>
            <div className="card-container">
      {props.portfolio.map((product) => (
        <CardPortfolio key={product._id} product={product} />
      ))}
    </div>
            </div>
            
        </Dashboard>
    )
    
} 

export const Suvinor = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <div className="body">
            <div className="main-banner" style={{backgroundImage:"url('souvenior_banner.jpg')",backgroundPositionY:'0'}}></div>
            <div className="card-container">
            {props.suvenir.map((product) => (
        <CardPortfolio key={product._id} product={product} />
      ))}
            </div>
            </div>
            
        </Dashboard>
    )
    
} 