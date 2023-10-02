import React from "react";
import HeadBar from "../components/HeadBar";
import privacy from "../assets/Privacy.png";
import PrivacyItem from "../components/PrivacyItem";
import glasses from "../assets/Glasses.svg";
import flag from "../assets/Flag.svg";
import privacyfire from "../assets/Privacy-Fire.svg";
import globe from "../assets/Globe.svg";
import stack from "../assets/Stack.svg";


export default function Privacy(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Privacy & Security"} loc={"/settings"}/>
            <img src={privacy} className="w-44 h-44 p-2"/>
            <PrivacyItem img={glasses} text={"DNS Leak Test"} detail={"Check If You Have DNS Tests"} loc={"/privacy"}/>
            <PrivacyItem img={flag} text={"IP Address Checker"} detail={"Check If Your IP Administrator Is Hidden"} loc={"/privacy"}/>
            <PrivacyItem img={privacyfire} text={"Web RTC Leak Test"} detail={"Check If Web RTC Is Incised With AP Address"} loc={"/privacy"}/>
            <PrivacyItem img={globe} text={"IP Address Checker"} detail={"Check If Your IP Administrator Is Hidden"} loc={"/privacy"}/>
            <PrivacyItem img={stack} text={"Trusted Servers"} detail={"Our VPN Servers Run On ROM, Not Hard Drivers"} loc={"/privacy"}/>
        </div>
    )
}