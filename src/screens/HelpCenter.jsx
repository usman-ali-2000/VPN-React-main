import React, { useState } from "react";
import HeadBar from "../components/HeadBar";
import group1 from "../assets/Group.png";
import line from "../assets/Line.svg";
import { IoSearch } from "react-icons/io5";
import HowToDo from "../components/HowToDo";
import vertical from "../assets/Vertical.svg";

export default function HelpCenter(){

    const [help1, setHelp1] = useState(false);
     const [help2, setHelp2] = useState(false);
     const [help3, setHelp3] = useState(false);

    const handleHelp1=()=>{
        if(help1){
            setHelp1(false);
        }else{
            setHelp1(true);
        }
    }
function HandleHelpWork1(){
return(
    <div onClick={handleHelp1}>
    {!help1?<div className="flex-center flex-row p-2">
            <text className="font-bold text-sm ">Ho To Do This?</text>
            <img src={line} className="h-6 w-6 ml-28"/>
        </div>:<HowToDo head={"Ho To Do This?"} innerhead={"Ho To Do This?"} text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."}/>}
        </div>
)
}

const handleHelp2=()=>{
    if(help2){
        setHelp2(false);
    }else{
        setHelp2(true);
    }
}
function HandleHelpWork2(){
return(
<div onClick={handleHelp2}>
{!help2?<div className="flex-center flex-row p-2">
        <text className="font-bold text-sm ">Ho To Do This?</text>
        <img src={line} className="h-6 w-6 ml-28"/>
    </div>:<HowToDo head={"Ho To Do This?"} innerhead={"Ho To Do This?"} text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."}/>}
    </div>
)
}
const handleHelp3=()=>{
    if(help3){
        setHelp3(false);
    }else{
        setHelp3(true);
    }
}
function HandleHelpWork3(){
return(
<div onClick={handleHelp3}>
{!help3?<div className="flex-center flex-row p-2">
        <text className="font-bold text-sm ">Ho To Do This?</text>
        <img src={line} className="h-6 w-6 ml-28"/>
    </div>:<HowToDo head={"Ho To Do This?"} innerhead={"Ho To Do This?"} text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."}/>}
    </div>
)
}
    return(
        <div className="flex-center flex-col overflow-hidden">
        <HeadBar txt="FAQ" loc={"/usersetting"}/>
        <div className="flex flex-row">
            <div className="flex flex-column mr-14">
        <div style={{backgroundImage:`url(${group1})`, height:220, width:300}}>
        <img src={vertical} className="mt-28 ml-64 h-20 w-20"/>
        </div>
        </div>
        </div>
        <div className="flex flex-row pt-6">
        <h3 className="font-bold">Do You Need <text style={{color:'dodgerblue'}}>Help?</text></h3><div className="flex-center flex-row">
        <div className="ml-20">
        <IoSearch className="w-4 h-4"/>
        </div>
        </div>
        </div>
        <HandleHelpWork1/>
        <HandleHelpWork2/>
        <HandleHelpWork3/>
        </div>
    )
}