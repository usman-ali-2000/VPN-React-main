import React from "react";
import homeUnsub from "../assets/home-unsub.svg";
import { BsX } from "react-icons/bs";
import support from "../assets/support.png";
import setting from "../assets/setting.png";
import star1 from "../assets/star1.png";
import share2 from "../assets/share2.png";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.svg";
import SettingItem from "../components/SettingItem";
import duocolor from "../assets/Duocolor.svg";

function Settings() {


  return (
    <div className="flex items-center justify-center flex-col p-4">
      <div className="setting header flex items-center justify-between gap-24 ">
        <img className="setting img h-10" src={homeUnsub} alt="" />
        <Link to="/home">
          <BsX className="h-10 w-10" />
        </Link>
      </div>
      <div className="text-grey text-sm p-2 mt-10">Menu</div>
      <div className="flex items-center justify-center flex-col w-screen">
        <SettingItem text="Contact Support" img={support} loc={"/gethelp"} />
        <SettingItem text="Share" img={duocolor} loc="/share" />
        <SettingItem text="Score" img={star1} />
        <SettingItem text="Settings" img={setting} loc="/usersetting" />
      </div>

      <div className="text-grey text-sm p-2 mt-10">Account</div>
      <div className="flex items-center">
        <div className="p-2">
          <img src={profile} className="h-20 w-20 rounded-full" alt="" />
        </div>
        <div className="flex flex-col w-72 p-5">
          <span className="font-bold">User Name</span>
          <span className="text-gray-500 text-sm">Premium User</span>
        </div>
        <Link to={"/premiumad"}>
        <img src={share2} className="h-10 w-14 " alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Settings;
