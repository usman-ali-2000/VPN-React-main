import React from "react";
import logo from "../assets/logo-gray.svg";
import Unsub from "../assets/home-unsub.svg";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
function GoBackNav({ login,loc }) {
  return login ? (
    <Link to={loc} className="flex items-center justify-center gap-16">
      <BsArrowLeftCircle className="text-3xl " />
      <img src={logo} alt="" className="w-48 " />
    </Link>
  ) : (
    <Link to={loc} className="flex items-center justify-center gap-16">
      <BsArrowLeftCircle className="text-3xl " />
      <img src={Unsub} alt="" className="w-48 " />
    </Link>
  );
}

export default GoBackNav;
