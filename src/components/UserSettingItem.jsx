import React from "react";
import { Link } from "react-router-dom";
function UserSettingItem({loc, img, text }) {
  return (
    <Link to={loc} className="flex-center flex-col">
      <img src={img} className="w-8" alt="" />
      <div className="">
        <span className="text-sm">{text}</span>
      </div>
    </Link>
  );
}

export default UserSettingItem;
