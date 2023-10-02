import React, { useState } from "react";
import HeadBar from "../components/HeadBar";
import plan1 from "../assets/Plan1.svg";
import PlanItem from "../components/PlanItem";
import plan2 from "../assets/Plan2.png";
import plan3 from "../assets/Plan3.svg";
import plan4 from "../assets/Plan4.svg";
import plan5 from "../assets/Plan5.svg";
import fire from "../assets/fire.svg";
import firecross from "../assets/Fire-cross.svg";
import crosscircle from "../assets/cross-circle.svg";
import LinearBtn from "../components/LinearBtn";
import Modal from "react-modal";
import { Link } from "react-router-dom";

export default function Plan(){

    const [free, setFree] = useState(false);
    const [pro, setPro] = useState(false);
    const [advance, setAdvance] = useState(false);
    const [freeYr, setFreeYr] = useState(false);
    const [proYr, setProYr] = useState(false);
    const [advanceYr, setAdvanceYr] = useState(false);
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

    
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openEndModal, setOpenEndModal] = useState(false);



  const handleOpenModal=()=>{
    setOpenModal(true);
  }

  const handleCloseModal=()=>{
    setOpenModal(false)
  }

  const handleOpenModal2=()=>{
    setOpenModal2(true);
  }

  const handleCloseModal2=()=>{
    setOpenModal2(false)
  }
    const handleFree=()=>{
        if(free){
            setFree(false);
        }else{
            setFree(true);
        }
    }
  const handleEndOpenModal=()=>{
    setOpenEndModal(true);
  }

  const handleEndCloseModal=()=>{
    setOpenEndModal(false)
  }  
    const handleFreeYr=()=>{
        if(freeYr){
            setFreeYr(false);
        }else{
            setFreeYr(true);
        }
    }
    const handlePro=()=>{
        if(pro){
            setPro(false);
        }else{
            setPro(true);
        }
    }

    const handleProYr=()=>{
        if(proYr){
            setProYr(false);
        }else{
            setProYr(true);
        }
    }
    const handleAdvance=()=>{
        if(advance){
            setAdvance(false);
        }else{
            setAdvance(true);
        }
    }
 
    const handleAdvanceYr=()=>{
        if(advanceYr){
            setAdvanceYr(false);
        }else{
            setAdvanceYr(true);
        }
    }
    const handleMonthly=()=>{
        setMonthly(true);
        setYearly(false);
    }

    const handleYearly=()=>{
        setYearly(true);
        setMonthly(false);
    }
 
    function MonthlyPlan(){
        return(
            <div className="flex-center flex-col">
            <div className="flex flex-row mt-4">
            <PlanItem image={plan2} text={"Free Plan"} amount={49.9} duration={"Per Month"} clr={"dodgerblue"}/>
            <div onClick={handleFree}>
            {free?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan3} text={"Pro"} amount={49.9} duration={"Per Month"} clr={"dodgerblue"}/>
            <div onClick={handlePro}>
            {pro?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan4} text={"Advance"} amount={49.9} duration={"Per Month"} clr={"dodgerblue"}/>
            <div onClick={handleAdvance}>
            {advance?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            </div>
        )
    }
 
    function YearlyPlan(){
        return(
            <div className="flex-center flex-col">
            <div className="flex flex-row mt-4">
            <PlanItem image={plan2} text={"Free Plan"} amount={49.9} duration={"Per Year"} clr={"dodgerblue"}/>
            <div onClick={handleFreeYr}>
            {freeYr?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan3} text={"Pro"} amount={49.9} duration={"Per Year"} clr={"dodgerblue"}/>
            <div onClick={handleProYr}>
            {proYr?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan4} text={"Advance"} amount={49.9} duration={"Per Year"} clr={"dodgerblue"}/>
            <div onClick={handleAdvanceYr}>
            {advanceYr?<img src={plan5} className="h-6 w-6 rounded-full mt-8"/>:<div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>}
            </div>
            </div>
            </div>
        )
    }
 
    
  const customOverlayStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",

      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

    return(
        <div className="flex-center flex-col mt-4">
            <HeadBar txt={"Plan"} loc={"/premiumad"} />
            {/* <img src={plan1} className="h-40 w-60"/> */}
            <div className="flex flex-row rounded-full mt-16">
             <div onClick={handleMonthly}>
             <text className="mr-20 ml-4 rounded-full " style={{backgroundColor:'white', color: monthly?'dodgerblue':'grey'}}>Monthly</text>
             </div>
             <div onClick={handleYearly}>
             <text className=" rounded-full " style={{backgroundColor:'white', color: yearly?'dodgerblue':'grey'}}>yearly</text>
            </div>
            </div>
            {monthly?<MonthlyPlan/>:<YearlyPlan/>}
            <div className="mt-10" onClick={handleOpenModal}>
            <LinearBtn text={"Choose Plan"} />
            </div>
            <div>
                <Modal
          className="custom-modal"
          isOpen={openModal}
          onRequestClose={handleCloseModal}
          style={customOverlayStyles}
                  >
            <img src={crosscircle} className="p-2" onClick={handleCloseModal}/>
        <div className="flex-center flex-col">
            <h3 className="font-bold" style={{fontSize:20}}>Agree To Our Terms</h3>
            <h3 className="font-bold" style={{fontSize:20}}>Of Services And <text  style={{color:'dodgerblue'}}>Privacy</text></h3>
            <div className="w-64">
            <p className="p-6 text-sm tracking-wider leading-6 text-center w-full" style={{color:'grey'}}>In publishing and graphic design, Lorem ipsum is a placeholder text.</p>
            </div>
            <div onClick={handleOpenModal2} className="mt-6">
            <LinearBtn text={"I Agree"}/>
            </div>
        </div>
                </Modal>
            </div>
            <div>
            <Modal
          className="custom-modal"
          isOpen={openModal2}
          onRequestClose={handleCloseModal2}
          style={customOverlayStyles}
                  >
            <img src={crosscircle} style={{height:30, width:30, marginRight:200}} onClick={handleCloseModal2}/>
        <div className="flex-center flex-col">
            <img src={fire} className="h-30 w-30 "/>
            <div className="p-2">
            <h3 className="font-bold text-center" style={{fontSize:20}}>You Subscribe</h3>
            <h3 className="font-bold text-center" style={{fontSize:20}}>To <text  style={{color:'dodgerblue'}}>Premium</text> Plan!</h3>
            </div>
            <div onClick={()=>{handleCloseModal(); handleCloseModal2()}} className="mt-4">
            <LinearBtn text={"Done"}/>
            </div>
        </div>
                </Modal>
            </div>
            <div>
            <Modal
          className="custom-modal"
          isOpen={openEndModal}
          onRequestClose={handleEndCloseModal}  //handle this when Premium Plan End
          style={customOverlayStyles}
                  >
                    <img src={crosscircle} style={{height:30, width:30, marginRight:200}} />
        <div className="flex-center flex-col">
            <div style={{backgroundImage:`url(${fire})`, height:180, width:140}} >
            <img src={firecross} className="h-20 w-20 ml-24 mt-14"/>
            </div>
            <div className="p-6 ">
            <h3 className="font-bold text-center" style={{fontSize:18}}>Your Premium Account</h3>
            <h3 className="font-bold text-center" style={{fontSize:18}}>Has <text  style={{color:'crimson'}}>Ended</text>..!</h3>
            </div>
            <LinearBtn text={"Done"}/>
        </div>
                </Modal>
            </div>
            </div>
    )
}