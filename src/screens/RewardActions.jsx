import React, { useState } from "react";
import HeadBar from "../components/HeadBar";
import reward from "../assets/Reward.svg";
import rewardtime from "../assets/RewardTime.svg";
import rewardplay from "../assets/RewardPlay.svg";
import PlanItem from "../components/PlanItem";
import plan3 from "../assets/Plan3.svg";
import plan4 from "../assets/Plan4.svg";

export default function RewardActions(){

    const [pro, setPro] = useState(false);
    const [advance, setAdvance] = useState(false);
    
    const handlePro=()=>{
        if(pro){
            setPro(false);
        }else{
            setPro(true);
        }
    }

    const handleAdvance=()=>{
        if(advance){
            setAdvance(false);
        }else{
            setAdvance(true);
        }
    }
    return(
        <div className="flex-center flex-col overflow-hidden">
            <HeadBar txt={"Rewarded Actions"} loc={"/settings"}/>
            {/* <img src={reward} className="h-40 w-full"/> */}
            <img src={rewardtime} className="h-30 w-30 mt-14"/>
            <h3 className="font-bold text-center mt-10" style={{fontSize:20}}>Earn <text style={{color:'dodgerblue'}}>Free</text> Time</h3>
            <img src={rewardplay} className="w-full " style={{height:130}}/>
            <text className="font-bold text-center " style={{fontSize:15}}>Subscribe<text style={{color:'dodgerblue'}}> Premium</text></text>
            <div className="flex flex-row">
            <PlanItem image={plan3} text={"Pro"} amount={49.9} clr={"#FF9820"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor: pro?'#FF9820':'lightgrey'}} onClick={handlePro}/>
            </div>
            {/* <div className="flex flex-row">
            <PlanItem image={plan4} text={"Advance"} amount={49.9} clr={"#FF9820"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:advance?'#FF9820':'lightgrey'}} onClick={handleAdvance}/>
            </div> */}
        </div>
    )
}