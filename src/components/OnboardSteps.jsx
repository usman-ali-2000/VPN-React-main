import React from "react";
import baseLogo from "../assets/base-logo.svg";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
function OnboardSteps({ text, thunder, step,bg="bg-primary", sendRoute="/" }) {
  return (
    <div className={`overflow-hidden h-screen ${bg} text-center text-white flex justify-evenly items-center flex-col`}>
      <img src={baseLogo} alt="" className="w-48" />
      <h2 className="w-80">{text}</h2>
      <div className="relative">
        <img src={thunder} alt="" className="w-72" />
        <div className="dots flex gap-2 absolute">
  <div className={`${step === 1 ? 'w-8' : 'w-3'} h-2 bg-white rounded-xl`}></div>
  <div className={`${step === 2 ? 'w-8' : 'w-3'} h-2 bg-white rounded-xl`}></div>
  <div className={`${step === 3 ? 'w-8' : 'w-3'} h-2 bg-white rounded-xl`}></div>
</div>

        <div>
          <div className="absolute right-0 -bottom-10 w-20 h-20 border-t-4 border-x-4  border-blue-500 border-solid rounded-full animate-spin"></div>

          <Link
            to={sendRoute}
            className="absolute -bottom-8 right-2 rounded-full p-2 bg-white text-primary"
          >
            <BsArrowRightShort className="text-5xl " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OnboardSteps;
