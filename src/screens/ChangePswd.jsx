import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoKeyOutline } from "react-icons/io5";
import changepswdpic from "../assets/1 9.svg";
import key from "../assets/Key.svg";
import GoBackNav from "../components/GoBackNav";
import SetPasswrd from "../components/SetPasswrd";
import LinearBtn from "../components/LinearBtn";

export default function ChangePswd() {
  const [color, setColor] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repPass, setRepPass] = useState("");

  const handleOldPass = (event) => {
    setOldPass(event.target.value);
  };

  const handleNewPass = (event) => {
    setNewPass(event.target.value);
  };

  const handleRepPass = (event) => {
    setRepPass(event.target.value);
  };

  return (
    <div className="flex-center flex-col w-full" >
      <GoBackNav text="Change Password" loc={"/usersetting"} />
      <img src={changepswdpic} className="w-52 mb-12 " />
      <div className="flex items-center justify-center flex-col gap-4 pb-10 w-full ">
        <SetPasswrd text="Old Password" />
        <SetPasswrd text="New Password" />
        <SetPasswrd text="Repeat Password" />
      </div>

    <LinearBtn text={"Set New Password"} loc="/usersetting" />
    </div>
  );
}
