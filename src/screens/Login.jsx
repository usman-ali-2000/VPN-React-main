import React from "react";
import login from "../assets/Login.svg";
import msg from "../assets/Msg.svg";
import lock2 from "../assets/Lock2.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";

export default function Login(){

    return(
        <div className="flex-center flex-col">
        <img src={login} style={{height:280, width:600}}/>
        <h3 className="font-bold text-center" style={{fontSize:20}}>Lets Login</h3>
        <h3 className="font-bold text-center" style={{fontSize:20}}>To Your A<text style={{color:'dodgerblue'}}>ccount</text></h3>
        <div className="flex flex-row ">
        <img src={msg} className="h-14 w-20"/>
        <div className="flex flex-col pt-4">
         <input
        type="text"
        className='w-56 focus:outline-none'
        placeholder="Email"/>
        </div>
        </div>
        <div className="flex flex-row ">
        <img src={lock2} className="h-8 w-20 pt-2"/>
        <div className="flex flex-col pt-2">
         <input
        type="password"
        className='w-56 focus:outline-none'
        placeholder="Password"/>
        </div>
        </div>
        <div className="flex flex-row p-2">
            <IoCheckmarkCircle
             style={{
                height: 18,
                width: 18,
                marginTop: 2,
                color: "dodgerblue",
              }}
            />
         <text style={{color:'grey', fontSize:15}}>I Agree To The Rules</text>
         <text className="ml-8" style={{color:'dodgerblue', fontSize:15}}>forget password?</text>
        </div>
        <div className="flex flex-row">
        <Link to={"/home"} className="rounded-full p-6 bg-linear w-36 text-center">Login</Link>
        <Link to={"/qr"} className="rounded-full p-6" style={{color:'dodgerblue'}}>Scan QR Code</Link>
        </div>
        </div>
    )
}