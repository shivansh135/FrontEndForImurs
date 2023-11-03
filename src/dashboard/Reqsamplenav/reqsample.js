import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../dash_buttons/buttons'
import { TagCredit } from '../headings/headings'

export  function Reqsample() {
  return (
    <div style={{display:'flex',justifyContent:'flex-end',gap:'24px'}}>
               
    <NavLink to="/sample"><ButtonPrimary text='Request a Sample'/></NavLink>
    <div>  <NavLink to='/createOrder'> <ButtonSecondary text='creare order'/></NavLink></div>
    
</div>
  )
}

export  function CreateOrder(props)
{
  return(  <div style={{display:'flex',justifyContent:'space-between'}}>
   <NavLink to='/createOrder'> <ButtonSecondary text='creare order'/></NavLink>
 
  <TagCredit data={props.data}/>
  </div>)


}