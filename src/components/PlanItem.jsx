import React from "react";

export default function PlanItem({image, text, amount, duration,clr }){

    return(
        <div className="flex flex-row">
            <img src={image} className="h-30 w-30"/>
            <text className=" mt-8 " style={{color:"black", fontWeight:'bold', width:100}}>{text}</text>
            <div className="flex-center flex-col p-2">
            <text style={{color:clr, fontWeight:'bold', fontSize:20}}>${amount}</text>
            <text style={{color:'grey', fontSize:15}}>{duration}</text>
        </div>
        </div>
    )
}