import React from "react";
import HeadBar from "../components/HeadBar";
import help1 from "../assets/Help1.png";
import HelpItem from "../components/HelpItem";
import phone from "../assets/Phone.svg";
import msg from "../assets/Msg.svg";
import insta from "../assets/Insta.svg";
import LinearBtn from "../components/LinearBtn";

export default function GetHelp(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Get Help"} loc={"/settings"}/>
            <img src={help1} className="p-4" style={{height:200, width:200}}/>
            <HelpItem image={phone} label={"Phone"} text={'+'+42+' '+409274034} />
            <HelpItem image={msg} label={"Email"} text={"Example@gmail.com"} />
            <HelpItem image={insta} label={"Instagram"} text={"Example Name"} />
            <div className="mt-14">
            <LinearBtn text={"Contact Support"} loc={"/gethelp"} />
            </div>
        </div>
    )
}