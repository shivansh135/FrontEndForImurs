import { NavLink } from "react-router-dom";
import "./landingdash.css"

export const LandingSideNavigation = () => {
    return (
      <div className="side-navigation">
        <div className="headding">imurs</div>
        <NavLink exact to='/' className='button'>
          <img alt='logo' src='logos/landing_dash/home.svg'/>
          <span className='text'>Home</span>
        </NavLink>
        <NavLink exact to='/samples' className='button'>
          <img alt='logo' src='logos/web-stories.svg'/>
          <span className='text'>Samples</span>
        </NavLink>
        <NavLink exact to='/orderD2C' className='button'>
          <img alt='logo' src='logos/landing_dash/orders.svg'/>
          <span className='text'>Orders</span>
        </NavLink>
        <NavLink exact to='/explore' className='button'>
          <img alt='logo' src='logos/landing_dash/explore.svg'/>
          <span className='text'>Explore</span>
        </NavLink>
        <NavLink exact to='/account' className='button'>
          <img alt='logo' src='logos/landing_dash/profile.svg'/>
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