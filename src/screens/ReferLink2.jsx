import React from "react";
import HeadBar from "../components/HeadBar";
import refer2 from "../assets/Refer2.svg";
import refer1 from "../assets/Refer1.svg";
import refer3 from "../assets/Refer3.svg";
import LinearBtn from "../components/LinearBtn";

export default function ReferLink2(){

    return(
        <div className="flex-center flex-col h-full ">
        <HeadBar txt={"Referral"} loc={"/referlink"}/>
        <div className="flex-center flex-row w-60">
         <img src={refer2} style={{height:150,width:150}}/>
         <img src={refer1} style={{height:280,width:300}}/>
        </div>
        <div className="flex flex-row">
            <img src={refer3}/>
            <div className="flex flex-col">
            <h3 className="font-bold pl-6 pt-4">15 Days Remaining</h3>
            <text className="text-xs pl-4" style={{color:'grey'}}>Of Your Monthly Paid Service</text>
            </div>
        </div>
        <div className="pt-20">
        <LinearBtn text={"Copy Referral Link"} loc={"/referlink2"}/>
        </div>
        </div>
    )
}