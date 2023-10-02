import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function PrivacyItem({img, text, detail, loc}){
    return(
            <Link to={loc} className="flex items-center justify-center gap-20 w-full p-4">
      <div className="flex-center gap-2 h-10 w-60">
        <img src={img} className="h-5 w-5" alt="" />
        <div className="flex flex-col w-50">
        <span className="ml-2 font-bold">{text}</span>
        <span className="ml-2 text-xs text-grey">{detail}</span>
        </div>
      <IoChevronForwardSharp className="h-5 w-5 text-grey " />
      </div>
    </Link>
    )
}