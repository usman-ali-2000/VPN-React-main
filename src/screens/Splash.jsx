import React, { useEffect, useState } from "react";
import splash from "../assets/splash.svg";

import Step1 from "./Step1";
function Splash() {
  const [nextPage, setNext] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNext(false);
    }, 3000);
  }, []);

  return nextPage ? (
    <div className="h-screen bg-primary flex items-center justify-center">
      <img src={splash} alt="logo" className="w-48" />
    </div>
  ) : (
    <Step1 />
  );
}

export default Splash;
