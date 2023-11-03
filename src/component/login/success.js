import React, { useEffect } from 'react';
import './success.css'
import { MainHeading } from '../headings/heading';
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
    <div className='body'>

        <MainHeading name="Loading..."/>
        <img className='Welcome_logo' alt="ImUrs" src='imurs_logo.png' />
        <MainHeading name="Please Wait"/>
    </div>
  );
}
