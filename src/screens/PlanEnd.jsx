import React from "react";
import fire from "../assets/fire.svg";
import LinearBtn from "../components/LinearBtn";
import crosscircle from "../assets/cross-circle.svg";
import firecross from "../assets/Fire-cross.svg";

export default function PlanEnd(){

    return(
        <div className="pt-20">
        <img src={crosscircle} className="p-6"/>
        <div className="flex-center flex-col">
            <div style={{backgroundImage:`url(${fire})`, height:180, width:140}} >
            <img src={firecross} className="h-20 w-20 ml-24 mt-14"/>
            </div>
            <div className="p-6 ">
            <h3 className="font-bold text-center" style={{fontSize:20}}>Your Premium Account</h3>
            <h3 className="font-bold text-center" style={{fontSize:20}}>Has <text  style={{color:'crimson'}}>Ended</text>..!</h3>
            </div>
            <LinearBtn text={"Done"} loc={"/confirmplan"}/>
        </div>
        </div>
    )
}