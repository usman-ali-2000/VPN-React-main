import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeadBar({txt, loc}){

    return(
        <div className="flex-center flex-row">
            <div className="flex-center flex-row">
                <Link to={loc}>
                <BsArrowLeftCircle className="text-3xl mr-14"/>
                </Link>
            <text className=" w-40 text-center">{txt}</text>
            </div>
            </div>
    )
}