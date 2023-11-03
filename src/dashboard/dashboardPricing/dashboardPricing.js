import React from "react"
import { Dashboard } from "../structure/structure"
import Plan from "../../component/plans/plan"
export const DashboardPricing = (props)=>{
    
    return(
        <Dashboard data={props.data}>
            <Plan/>
        </Dashboard>
    )
    
} 