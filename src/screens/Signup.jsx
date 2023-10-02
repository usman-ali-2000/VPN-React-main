import React from "react";
import baseLogo from "../assets/logo-gray.svg";
import InputField from "../components/InputField";
import {LiaUserSolid} from "react-icons/lia";
import {AiOutlineLock} from "react-icons/ai";
import {MdOutlineEmail} from "react-icons/md";
import LinearBtn from "../components/LinearBtn";
import NormalBtn from "../components/NormalBtn";
function Signup() {
  return (
    <div className="bg-white h-screen flex-center flex-col gap-6">
      <img src={baseLogo} alt="" className="w-48" />
      <h2 className="text-center text-secondary">
        Create New The <span className="text-primary">Account!</span>
      </h2>
      <InputField
        label={"Name"}
        type={"text"}
        placeholder={"Enter Name"}
        id={"name"}
        icon={<LiaUserSolid className="text-4xl pr-2"/>}
      />
      <InputField
        label={"Email"}
        type={"text"}
        placeholder={"Enter Email"}
        id={"email"}
        icon={<MdOutlineEmail className="text-4xl pr-2"/>}
      />
      <InputField
        label={"Password"}
        type={"password"}
        placeholder={"Enter Password"}
        id={"password"}
        icon={<AiOutlineLock className="text-4xl pr-2"/>}
      />
      <div className="flex items-center justify-center gap-6 w-full">
      <div className="flex items-center ">
        <input
          type="checkbox"
          id="agreeToRules"
          className="rounded-full bg-gray-300 w-4 h-4 mr-2"
        />
        <label htmlFor="agreeToRules" className="text-sm">I agree to the rules</label>
      </div>
      <a href="#" className="text-sm text-primary">
        Forgot Password
      </a>
    </div>
    <div className="flex-center gap-4 mt-6">
        <NormalBtn text="Login" loc="/qr"/>
        <LinearBtn text="Sign Up" loc="/home"/>
    </div>
    
    </div>
  );
}

export default Signup;
