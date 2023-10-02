import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {IoShieldCheckmarkSharp, IoHome, IoKeyOutline} from "react-icons/io5"
import success from "../assets/Success.png";
import LinearBtn from "../components/LinearBtn";

export default function Success(){

    return(
        <div className="flex-center flex-col overflow-hidden">
            <div style={{paddingLeft:40, paddingRight:40, paddingBottom:40, display:'flex', flexDirection:'row'}}>
                <Link to="/changepswd">
                <BsArrowLeftCircle className="text-3xl" style={{marginRight:40}}/>
                </Link>
            <text style={{fontWeight:'bold', width:200, paddingLeft:20}}>Success</text>
            </div>
           <div className="flex-center flex-col">
            <img src={success} style={{color:'aqua', height:140, width:120}}/>
            <div className="flex-center flex-col mt-10">
            <text style={{fontSize:20}}>Your New Password</text>
            <text style={{fontSize:20}}>Has Been Successfully Set</text>
            <text style={{ marginTop:20, color:'grey'}}>From Now You Can Use Your <text style={{color:'dodgerblue'}}>New</text></text>
            <text style={{color:'grey'}}><text style={{color:'dodgerblue'}}>Password</text> in Your Current VPN Account</text>
           </div>
           </div>
           <div className="mt-14">
           <LinearBtn text={"Go Back Home"} loc={"/home"}/>
           </div>
<Link to={"/changepswd"} className="mt-8 rounded-full">
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:10,}}>
    <div style={{marginTop:20, display:'flex', flexDirection:'row'}}>
    <text style={{ color:'dodgerblue', marginLeft:100}}>Change Password</text>
    </div>
</div>
</Link>
        </div>
    )
}