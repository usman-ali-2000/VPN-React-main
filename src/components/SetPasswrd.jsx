import React from 'react'
import key from "../assets/Key.svg";
function SetPasswrd({text}) {
  return (
    <div className="flex-center gap-4">
    <img src={key} className=" " />
    <div className="flex flex-col">
      <span className="text-grey text-xs">{text}</span>
      <input
        type="password"
        className='w-56 focus:outline-none'
        // value={oldPass}
        // onChange={handleOldPass}
        // className={color ? "focus:outline-none" : ""}
      />
    </div>
  </div>
  )
}

export default SetPasswrd