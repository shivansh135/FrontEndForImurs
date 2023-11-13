import React from 'react'
import { Dashboard } from '../../dashboard/structure/structure'
import Product from './product'

export default function Productdash(props) {
 
  return (
  
    <Dashboard data={props.data}>
    <Product />
    </Dashboard>
    
  )
}
