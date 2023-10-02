import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardSharp } from "react-icons/io5";
function SettingItem({ img, text, loc = "/settings" }) {
  return (
    <Link to={loc} className="flex items-center justify-center gap-20 w-full mt-5">
      <div className="flex-center gap-2">
        <img src={img} className="h-5 w-5" alt="" />
        <span className="ml-2 font-bold w-52">{text}</span>
      </div>
      <IoChevronForwardSharp className="h-5 w-5 text-grey " />
    </Link>
  );
}

export default SettingItem;
