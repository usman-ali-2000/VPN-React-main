import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DeviceItem({img, text, detail, loc}){

    return(
        <Link to={loc} className="flex items-center justify-center gap-20 h-20 w-full p-4">
      <div className="flex-center gap-2 w-60 p-4">
        <img src={img} className="h-14 w-14" alt="" />
        <div className="flex flex-col w-80">
        <span className="ml-2 font-bold">{text}</span>
        <span className="ml-2 text-xs text-grey pt-2">{detail}</span>
        </div>
      </div>
    </Link>
    )
}