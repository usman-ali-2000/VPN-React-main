import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import fail from "../assets/Fail.png";
import LinearBtn from "../components/LinearBtn";

export default function Fail(){

    return(
        <div className="flex-center flex-col overflow-hidden">
            <div style={{paddingLeft:40, paddingRight:40, paddingBottom:40, display:'flex', flexDirection:'row'}}>
                <Link to="/changepswd">
                <BsArrowLeftCircle className="text-3xl" style={{marginRight:40}}/>
                </Link>
            <text style={{fontWeight:'bold', width:200, paddingLeft:20}}>Fail</text>
            </div>
           <div className="flex-center flex-col">
            <img src={fail} style={{color:'red', height:110, width:110}}/>
           <div className="flex-center flex-col mt-6 w-80">
            <text style={{fontSize:20}}>Your New Password</text>
            <text style={{fontSize:20}}>Has Not Been Set!</text>
            <text className="text-center p-2 text-center w-80" style={{ marginTop:10, color:'grey'}}>You May Have Entered Password With Are NotAble To Be Set.<text style={{color:'dodgerblue'}}> Back And Reset Your Password</text></text>
           </div>
           </div>
           <div className="mt-14">
           <LinearBtn text={"Reset Password"} loc={"/changepswd"}/>
           </div>
<Link to={"/home"} className="mt-8">
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:10}}>
    <div style={{marginTop:20, display:'flex', flexDirection:'row', marginLeft:110}}>
    <text style={{ color:'dodgerblue'}}>Back to Home</text>
    </div>
</div>
</Link>
        </div>
    )
}