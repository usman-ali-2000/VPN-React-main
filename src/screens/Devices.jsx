import React, { useState } from "react";
import device from "../assets/Device.png";
import HeadBar from "../components/HeadBar";
import DeviceItem from "../components/DeviceItem";
import iphoneimg from "../assets/Iphone.svg";
import macimg from "../assets/Mac.svg";
import lenovoimg from "../assets/Lenovo.svg";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Devices(){

    const [iphone, setIphone] = useState(false);
    const [mac, setMac] = useState(false);
    const [lenovo, setLenovo] = useState(false);

    const handleIphone=()=>{
        if(iphone){
            setIphone(false);
        }else{
            setIphone(true);
        }
    }

    const handleMac=()=>{
        if(mac){
            setMac(false);
        }else{
            setMac(true);
        }
    }
    
    const handleLenovo=()=>{
        if(lenovo){
            setLenovo(false);
        }else{
            setLenovo(true);
        }
    }
    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Devices"} loc={"/settings"}/>
            <text style={{color:'grey'}}>total 3</text>
            {/* <img src={device} className="h-40 w-64 mt-4 "/> */}
            <div className="mt-10">
            <div className="flex  flex-row p-4">
            <DeviceItem img={iphoneimg} text={"Iphone 14 Pro Max"} detail={"7 July 2023"} loc={"/devices"}/>
            <IoCheckmarkCircle className="h-6 w-6 mt-6" style={{color:iphone?'lightgrey':'dodgerblue'}} onClick={handleIphone}/>
            </div>
            <div className="flex  flex-row p-4">
            <DeviceItem img={macimg} text={"Mac Book Pro (Rich Kid)"} detail={"7 July 2023"} loc={"/devices"}/>
            <IoCheckmarkCircle className="h-6 w-6 mt-6" style={{color:mac?'lightgrey':'dodgerblue'}} onClick={handleMac}/>
            </div>
            <div className="flex  flex-row p-4">
            <DeviceItem img={lenovoimg} text={"Lenovo"} detail={"7 July 2023"} loc={"/devices"}/>
            <IoCheckmarkCircle className="h-6 w-6 mt-6" style={{color:lenovo?'lightgrey':'dodgerblue'}} onClick={handleLenovo}/>
            </div>
        </div>
           <Link to={"/devices"} className="shadow-md text-secondary rounded-full min-w-fit font-bold p-6" style={{color:'crimson'}}>Delete</Link>
        </div>
    )
}