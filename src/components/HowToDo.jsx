import React from "react";
import line from "../assets/Line.svg";
import line2 from "../assets/Line2.svg";

export default function HowToDo({head, innerhead,text}){

    return(
        <div className="flex-center flex-col">
        <div className="p-2 w-64">
        <div className="flex flex-row">
        <text className="font-bold text-sm " style={{color:'dodgerblue'}}>{innerhead}</text>
        <img src={line2} className="h-6 w-6 ml-28"/>
        </div>
        <p className="text-xs" style={{color:'grey'}}>{text}</p>
        </div>
        </div>
    )
}