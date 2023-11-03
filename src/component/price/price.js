import React from 'react'
import { PriceCardA } from './pricecard/pricecard'
import { PriceCardB } from './pricecard/pricecard1'
import { PriceCardC } from './pricecard/pricecard3'

export default function Price() {
  return (

    <>
    <div style={{ marginTop: "100px" }} />
    <div style={{display:"flex",justifyContent:"center",gap:"2rem"}}>
      <PriceCardA/>
      <PriceCardB/>
     <PriceCardC/>
      
     
    </div></>
  )
}
