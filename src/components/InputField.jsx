import React, { useState } from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";

function InputField({ label, type, id, placeholder,icon }) {
  let labelHTML = label.toLowerCase();
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const handlePassword = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     if (newPassword.length > 7) {
//       setPasswordError("");
//     } else {
//       setPasswordError("Password must be at least 8 characters.");
//     }
//   };
  return (
    <>
      {type === "password" ? (
        <>
          <div className="flex items-center py-3 pl-6  text-gray-800 rounded-full shadow-lg w-4/5 md:w-1/3 lg:w-1/5">
          {icon}
          <input
            type={type}
            id={id}
            className=" outline-none w-full"
            placeholder={placeholder}
            // onChange={handlePassword}
            required
          />
          {/* <AiOutlineEyeInvisible className="text-3xl  mr-2"/> */}
          </div>
         

          {/* <p className="text-red mt-4 text-sm">{passwordError}</p> */}
        </>
      ) : (
        <>
        <div className="flex items-center py-3 pl-6  text-gray-800 rounded-full shadow-lg w-4/5 md:w-1/3 lg:w-1/5" >
          {icon}
          <input
            type={type}
            id={id}
            className="  outline-none w-full"
            placeholder={placeholder}
            required
          />
          </div>
        </>
      )}
    </>
  );
}

export default InputField;
