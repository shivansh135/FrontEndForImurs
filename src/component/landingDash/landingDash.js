import { NavLink } from "react-router-dom";
import "./landingdash.css"

export const LandingSideNavigation = () => {
    return (
      <div className="side-navigation">
        <div className="headding">imurs</div>
        <NavLink exact to='/' className='button'>
          <img alt='logo' src='logos/grid-view.svg'/>
          <span className='text'>Dashboard</span>
        </NavLink>
        <NavLink exact to='/orders' className='button'>
          <img alt='logo' src='logos/local-mall.svg'/>
          <span className='text'>Samples</span>
        </NavLink>
        <NavLink exact to='/orderD2C' className='button'>
          <img alt='logo' src='logos/sell.svg'/>
          <span className='text'>Create</span>
        </NavLink>
        <NavLink exact to='/portfolio' className='button'>
          <img alt='logo' src='logos/web-stories.svg'/>
          <span className='text'>Explore</span>
        </NavLink>
        <NavLink exact to='/account' className='button'>
          <img alt='logo' src='logos/redeem.svg'/>
          <span className='text'>Profile</span>
        </NavLink>
      </div>
    );
  }

export const LandingDash = ({children}) =>{
    return(
        <div className="landingDash">
            <div className="landingMain">
            {children}

            </div>
            <LandingSideNavigation/>

        </div>
    )
}