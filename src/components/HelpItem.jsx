import React from "react";

export default function HelpItem({image, label, text}){

    return(
        <div className="flex flex-row">
         <img src={image} className="h-20 w-20"/>
         <div className="flex flex-col w-60 p-4">
            <text className="text-xs text-grey font-bold">{label}</text>
            <text className="font-bold">{text}</text>
         </div>
        </div>
    )
}