import React from "react";
import fire from "../assets/fire.svg";
import crosscircle from "../assets/cross-circle.svg";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";

export default function CofirmPlan(){

    return(
        <div className="pt-20">
            <Link to={"/plan"}>
            <img src={crosscircle} className="p-6"/>
            </Link>
        <div className="flex-center flex-col">
            <img src={fire}/>
            <div className="p-6">
            <h3 className="font-bold text-center" style={{fontSize:20}}>You Subscribe</h3>
            <h3 className="font-bold text-center" style={{fontSize:20}}>To <text  style={{color:'dodgerblue'}}>Premium</text> Plan!</h3>
            </div>
            <LinearBtn text={"Done"} loc={"/confirmplan"}/>
        </div>
        </div>
    )
}