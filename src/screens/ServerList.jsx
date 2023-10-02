import React from "react";
import Server from "../components/Server";
import { US,IN,KE,SA,NL } from "country-flag-icons/react/3x2";
import GoBackNav from "../components/GoBackNav";
import StarServer from "../components/StarServer";
import bestSig from "../assets/best-sig.svg"
import betterSig from "../assets/better-sig.svg"
import badSig from "../assets/bad-sig.svg"

function ServerList() {
  return (
    <div>
  <GoBackNav login={false} loc="/home" />
  
  <div className="flex-center flex-col mt-10 gap-2">
  
      <StarServer
        flag={
          <US title="United States" className="rounded-full w-16 h-16 p-2" />
        }
        text={"United States"}
        loc={"18 Locations"}
        rte={"/home"}
        signal={bestSig}
      />
         <StarServer
        flag={
          <IN title="India" className="rounded-full w-16 h-16 p-2" />
        }
        text={"India"}
        loc={"18 Locations"}
        rte={"/home"}
        signal={betterSig}
      />
         <StarServer
        flag={
          <KE title="Korea" className="rounded-full w-16 h-16 p-2" />
        }
        text={"Korea"}
        loc={"18 Locations"}
        rte={"/home"}
        signal={badSig}
      />
         <StarServer
        flag={
          <SA title="United States" className="rounded-full w-16 h-16 p-2" />
        }
        text={"United States"}
        loc={"18 Locations"}
        rte={"/home"}
        signal={bestSig}
      />   <StarServer
      flag={
        <NL title="NetherLand" className="rounded-full w-16 h-16 p-2" />
      }
      text={"NetherLand"}
      loc={"18 Locations"}
      rte={"/home"}
      signal={bestSig}
    />   <StarServer
    flag={
      <US title="United States" className="rounded-full w-16 h-16 p-2" />
    }
    text={"United States"}
    loc={"18 Locations"}
    rte={"/home"}
    signal={bestSig}
  />
  </div>
    </div>
  );
}

export default ServerList;
