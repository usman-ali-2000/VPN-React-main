import React from "react";
import premiumad from "../assets/Premiumad.png";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";

export default function PremiumAd(){

    return(
        <div className="flex-center flex-col">
            <Link to={"/home"}>
            <text className="underline text-xs pl-6 pt-6 mr-48">Continue As Free</text>
            </Link>
            <div className="flex-center flex-col mt-10">
            <img src={premiumad} className="h-30 w-40"/>
            <h3 className="font-bold text-center w-60 mt-10 " style={{fontSize:20}}>What Is The Features Of<text  style={{color:'dodgerblue'}}> Premium</text> Account?</h3>
            <text className="text-xs text-center w-60 leading-6 mt-2" style={{color:'grey'}} >In publishing and graphic design, Lorem ipsum is a placeholder text. </text>
            <div className="mt-8">
            <LinearBtn text={"Subscribe Now!"} loc={"/plan"}/>
            </div>
            <Link to={"/premiumad"} className="shadow-md text-secondary rounded-full p-6 min-w-fit font-bold mt-8 " style={{color:'dodgerblue'}}>Start 7 Days Trial</Link>       
            </div>
            </div>
    )
}