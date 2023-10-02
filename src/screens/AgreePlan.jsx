import React from "react";
import LinearBtn from "../components/LinearBtn";
import crosscircle from "../assets/cross-circle.svg";
import { Link } from "react-router-dom";

export default function AgreePlan(){

    return(
        <div className="pt-20">
            <Link to={"/plan"}>
            <img src={crosscircle} className="p-6"/>
            </Link>
        <div className="flex-center flex-col">
            <h3 className="font-bold" style={{fontSize:20}}>Agree To Our Terms</h3>
            <h3 className="font-bold" style={{fontSize:20}}>Of Services And <text  style={{color:'dodgerblue'}}>Privacy</text></h3>
            <p className="p-6 text-grey text-sm tracking-wider leading-6 text-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            <LinearBtn text={"I Agree"} loc={"/confirmplan"}/>
        </div>
        </div>
    );
}