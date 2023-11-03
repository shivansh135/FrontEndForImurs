import { NavLink } from 'react-router-dom';
import { Tag_1, Tag_2 } from '../headings/headings';
import './structure.css'
import { Footer } from '../footer/footer';


export const TopNavigation = (props) => {
  return (
    <div className="top-navigation">
      <Tag_1 data={props.data}/>
      <NavLink exact to='/profile'
       className='logo' 
       style={{
        backgroundImage:(props.data.logo)?`url('https://drive.google.com/thumbnail?export=view&id=${props.data.logo}&cache-control=max-age=172800')`:"url('user.png')",
        backgroundSize:'80%',
        backgroundPosition:'center'
        }}>
      </NavLink>
    </div>
  );
}

export const SideNavigation = () => {
    return (
      <div className="side-navigation">
        <div className="headding">IMURS</div>
        <NavLink exact to='/' className='button'>
          <img alt='logo' src='logos/grid-view.svg'/>
          <span className='text'>Dashboard</span>
        </NavLink>
        <NavLink exact to='/orders' className='button'>
          <img alt='logo' src='logos/local-mall.svg'/>
          <span className='text'>Orders</span>
        </NavLink>
        <NavLink exact to='/pricing' className='button'>
          <img alt='logo' src='logos/sell.svg'/>
          <span className='text'>Pricing</span>
        </NavLink>
        <NavLink exact to='/portfolio' className='button'>
          <img alt='logo' src='logos/web-stories.svg'/>
          <span className='text'>Portfolio</span>
        </NavLink>
        <NavLink exact to='/suvenir' className='button'>
          <img alt='logo' src='logos/redeem.svg'/>
          <span className='text'>Suvenir</span>
        </NavLink>
      </div>
    );
  }



export const Dashboard = ({ children ,data}) => {
  console.log(data)
    return (
      <div className="dashboard-body">
        <SideNavigation/>
        <div className='main'>
          <div style={{position:'absolute',width:"100%",height:'80px',backgroundColor:"var(--isabeline)",zIndex:'9999',top:'0',left:'0'}}></div>
            <TopNavigation data={data}/>
            {children}
            <Footer/>
        </div>
      </div>
    );
  }