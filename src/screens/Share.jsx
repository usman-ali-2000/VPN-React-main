import React from "react";
import HeadBar from "../components/HeadBar";
import qr from "../assets/QR.png";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";

export default function Share(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Share Qr Code"} loc={"/settings"}/>
            <img src={qr} className="p-4" style={{height:200, width:200}}/>
            <h3 className="font-bold text-center mt-10" style={{fontSize:15}}>Invite Your Firends</h3>
            <p className="text-xs text-center w-64 mt-4 leading-6 p-2" style={{color:'grey'}}>Invite Friends To Get Paid Subscriptions <text style={{color:'dodgerblue'}}>This Invitation Link Is Just For You..!</text></p>
            <LinearBtn text={"Copy Refferal Link"}/>
            <Link className="text-center rounded-full mt-8 " style={{color:'dodgerblue'}}>Share It</Link>
        </div>
    )
}