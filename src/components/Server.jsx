import React from 'react'
import arrow from "../assets/arrow.png";
import { Link } from 'react-router-dom';
function Server({flag,text,loc,rte}) {
  return (
    <Link to={rte} className="shadow-sm p-2 px-4 shadow-[#a1a0a3] flex items-center justify-between w-[320px] rounded-xl">
        <div className="flex items-center">
{flag}
          <div className="flex items-start flex-col">
            <h1 className="text-lg">{text}</h1>
            <p className="text-sm">{loc}</p>
          </div>
        </div>
        <img src={arrow} alt="" />
      </Link>
  )
}

export default Server