import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ButtonSecondary } from "../button/button";
import "./navbar.css";

export const NavbarLanding = () => {
    const location = useLocation();
    const [currentPathname, setPath] = useState(location.pathname);
  
    useEffect(() => {
      // Update state when the pathname changes
      setPath(location.pathname);
    }, [location.pathname]);
   

    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
    const [isMenuclosing, setIsMenuClosing] = useState(false); 

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.landingMain').addEventListener('scroll', handleScroll);
            if(currentPathname !=="/"){
                setScrolling(true)
                
            }
        return () => {
            document.querySelector('.landingMain').removeEventListener('scroll', handleScroll);
        };
        }, 200);
        
    }, [currentPathname]);

    const handleScroll = () => {
        if (document.querySelector('.landingMain').scrollTop > 200 || window.location.pathname!=="/") {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu state
        setIsMenuClosing(false)
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuClosing(true);
        setTimeout(()=>{
            setIsMenuOpen(false);
        },1000)   
    };
    
    console.log(currentPathname)
   

    return (
        <div className={`nav ${scrolling ? 'scrolled' : ''}`}>

            <div className="menu" style={{display:'none'}}>
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenu}>
                    <path d="M0 19.2211V17.4711H28V19.2211H0ZM0 10.875V9.12495H28V10.875H0ZM0 2.52881V0.778809H28V2.52881H0Z" fill="#333332"/>
                </svg>
           </div>

          { /* <i className='fa-solid fa-bars menu' ></i>*/}
            <NavLink exact to="/" className="navTitle" style={{color:currentPathname==='/'?"var(--isabeline)":"var(--jet-black)"}}>
            <svg style={{opacity:`${(currentPathname!=='/') ? 1 : 0}`}} onClick={()=>{window.history.back()}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
                <span>imurs</span>
            </NavLink>
            <ButtonSecondary direction={true} to="/plans" className="hidden"/>
            
            {/* Pass the closeMenu function as a prop */}
            {isMenuOpen && <NavOpen closeMenu={closeMenu} isMenuclosing={isMenuclosing} />}
        </div>
    );
};
export const NavOpen = ({ closeMenu,isMenuclosing }) => {


    const click=()=>
    {
      closeMenu();
    }


    return (
        
        <div className={`nav-open ${isMenuclosing ? 'fade-out':'' }`}>
{/*<i class="fa-solid fa-x close" ></i>*/}
    <div className="close">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={closeMenu}>
<path d="M2.1999 22.5854L0.961426 21.367L10.7614 11.7251L0.961426 2.08324L2.1999 0.864746L11.9999 10.5066L21.7999 0.864746L23.0384 2.08324L13.2384 11.7251L23.0384 21.367L21.7999 22.5854L11.9999 12.9436L2.1999 22.5854Z" fill="#F7F5F2"/>
</svg>
</div>
            <div className="frame">
                <div className="div">
                    <div className="frame-2">
                        <NavLink exact to="/" className="text-wrapper" onClick={click} >HOME</NavLink>
                    </div>
                    <div className="frame-2">
                        <NavLink exact to="/login" className="text-wrapper" onClick={click} >LOGIN</NavLink>
                    </div>
                    <div className="frame-2">
                        <NavLink exact to="/plans" className="text-wrapper" onClick={click}>CORPORATE PLANS</NavLink>
                    </div>
                </div>
                <div  className="text-wrapper-2">imurs</div>
            </div>
        </div>
    );
};
