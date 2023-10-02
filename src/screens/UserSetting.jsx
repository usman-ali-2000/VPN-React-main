import React from "react";
import GoBackNav from "../components/GoBackNav";
import LinearBtn from "../components/LinearBtn";
import {
  IoDiscSharp,
} from "react-icons/io5";
import key from "../assets/Key.svg";
import removefriend from "../assets/remove-friend.png";
import useravatar from "../assets/user-avatar.png";
import logout from "../assets/logout.png";
import profile from "../assets/Profile.svg";
import shield from "../assets/Shield.svg";
import language from "../assets/Language.svg";
import duocolor from "../assets/Duocolor.svg";
import UserSettingItem from "../components/UserSettingItem";
import info from "../assets/Info.svg";


export default function UserSetting() {
  return (
    <div className="flex-center flex-col p-4">
      <GoBackNav loc="/settings" />
      <div className="flex items-center justify-center gap-16 p-10 ">
        <div className="relative">
          <img src={profile} alt="" />
          <div className="absolute bottom-4 left-14 ">
            <IoDiscSharp className="rounded-full" style={{color:'dodgerblue', height:20, width:20, borderWidth:2, borderColor:'white'}}/>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">User Name</span>
          <span className="text-gray-500 text-sm">Premium User</span>
        </div>
      </div>
      <div className="flex-center flex-col">
        <div className="flex justify-between gap-10">
          <UserSettingItem loc="/changepswd" img={key} text="Change Password" />
          <UserSettingItem
            loc="/cancelacc"
            img={removefriend}
            text="Cancel Account"
          />
        </div>
        <div className="flex justify-between gap-10 mt-6">
          <UserSettingItem
            loc="/editprofile"
            img={useravatar}
            text="Edit Profile"
          />
          <UserSettingItem loc="/language" img={language} text="Language" />
          <UserSettingItem loc="/security" img={shield} text="Security" />
        </div>
        <div className="flex justify-between gap-10 mt-6 mb-6">
          <UserSettingItem loc="/helpcenter" img={info} text="Help Center" />
          <UserSettingItem loc="/referlink" img={duocolor} text="Refer Link" />
          <UserSettingItem loc="/login" img={logout} text="Logout" />
        </div>
        <LinearBtn text={"Go Premium"} loc="/plan" />
      </div>
    </div>
  );
}
