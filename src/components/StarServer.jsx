import React from "react";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
import star from "../assets/star.png"
function StarServer({ flag, text, loc, rte,signal }) {
  return (
    <div
      to={rte}
      className="shadow-sm p-2 px-4 shadow-[#a1a0a3] flex items-center justify-between w-[320px] rounded-xl"
    >
      <div className="flex items-center">
        <div className="relative">
        {flag}
        <img src={star} alt="" className="absolute top-4 left-4"/>
        </div>
        <div className="flex items-start flex-col">
          <h1 className="text-lg">{text}</h1>
          <p className="text-sm">{loc}</p>
        </div>
      </div>
      <img src={signal} alt="" />
      <input type="checkbox" name="select" id="select" className="" />
    </div>
  );
}

export default StarServer;
