import React, { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Server from "../components/Server";
import VPNDiamond from "../components/VPNDiamond";
import { US } from "country-flag-icons/react/3x2";
function Home() {
  const [clicked, setClicked] = useState(false);
  const [status, setStatus] = useState('Not Connected');
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  useEffect(() => {
    if (clicked) {
      // After 3 seconds, change the status
      const timeoutId = setTimeout(() => {
        setStatus('Congratulations');
      }, 3000);

      // Clean up the timeout when the component unmounts or when `clicked` changes
      return () => {clearTimeout(timeoutId);setStatus('Not Connected');}
    }
  }, [clicked]);

  return (
    <div className="flex-center flex-col overflow-hidden mt-6">
      <Navbar login={true} />
      <div onClick={handleClick}>
      {clicked ? (
        status === 'Congratulations' ? (
          <h2 className="p-4">Congratulations</h2>
        ) : (
          <div className="flex-center flex-col">
            <p>Connecting...</p>
            <h2>Already Done</h2>
          </div>
        )
      ) : (
        <div className="flex-center flex-col">
          <p>{status}</p>
          <h1>00:00:00</h1>
        </div>
      )}
    </div>
 
      <button onClick={handleClick}>
      <VPNDiamond clicked={clicked} />
      </button>
      
      <Server
      flag={<US title="United States" className="rounded-full w-16 h-16 p-2" />}
      text={"United States"}
        loc={"18 Locations"}
        rte={"/serverlist"}
    />
    </div>
  );
}

export default Home;
