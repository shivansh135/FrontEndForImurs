import React, { useEffect } from 'react';
import './success.css'
import { HedingSubheding, MainHeading } from '../headings/heading';
import { FallingLines, Oval, TailSpin, ThreeDots } from 'react-loader-spinner';
export default function Success() {
  useEffect(() => {
    // Check if the page has been reloaded before
    const hasReloaded = localStorage.getItem('hasReloaded');

    // If it hasn't been reloaded, perform the reload and set the flag
    if (hasReloaded == 'false') {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className='body' style={{justifyContent:'center',alignItems:'center',marginTop:'300px',paddingBottom:'300px'}}>
        
<TailSpin
  height="80"
  width="80"
  color="var(--newpersian-red)"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{
    backgroundImage: 'url(/magazine.svg)',
    backgroundSize:'50%',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
  wrapperClass=""
  visible={true}
/>
    </div>
  );
}

export const Loadin = ()=>{

  return (
    <div className='body' style={{justifyContent:'center',alignItems:'center',marginTop:'200px',paddingBottom:'300px'}}>
      

<ThreeDots
height="80" 
width="80" 
radius="9"
color="var(--newpersian-red)"
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />

    </div>
  );
}
