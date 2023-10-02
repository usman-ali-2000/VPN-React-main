import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.svg";
import subtract from "../assets/Subtract.svg";
import { IoPersonOutline, IoPencilSharp, IoMailOutline, IoLocationOutline, IoCheckmarkSharp, IoDiscSharp } from "react-icons/io5";
import LinearBtn from "../components/LinearBtn";

export default function EditProfile(){

    const [name, setName] = useState('User Name');
    const [number, setNumber] = useState(7867478645);
    const [email, setEmail] = useState('example@gmail.com');
    const [location, setLocation] = useState('United States');


    const handleName=(event)=>{
        setName(event.target.value);
    }

    const handleNumber=(event)=>{
        setNumber(event.target.value);
    }
    
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    
    const handleLocation=(event)=>{
        setLocation(event.target.value);
    }

    return(
        <div className="flex-center flex-col overflow-hidden">
            <div style={{paddingLeft:40, paddingRight:40, paddingBottom:40, display:'flex', flexDirection:'row'}}>
                <Link to="/usersetting">
                <BsArrowLeftCircle className="text-3xl" style={{marginRight:40}}/>
                </Link>
            <text style={{fontWeight:'bold', width:200, paddingLeft:20}}>Edit Profile</text>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
  <div style={{padding:10, display:'flex', flexDirection:'column', backgroundImage:`url(${profile})`, height:70, width:70, backgroundSize:'cover'}}>
  <div style={{marginLeft:40, marginTop:35}}>
  <IoDiscSharp style={{color:'dodgerblue',height:25, width:25, borderWidth:5, borderRadius:30, borderColor:'white'}}/>
  </div>
  </div>
  <div style={{display:'flex', flexDirection:'column', width:200, padding:20}}>
  <text style={{fontWeight:'bold'}}>User Name</text>
  <text style={{color:'grey', fontSize:15}}>Premium User</text>
  </div>
  <img src={subtract} style={{height:15, width:15, marginTop:40}}/>
</div>
            <div style={{height:70, width:350, borderRadius:50, marginLeft:40, marginTop:10}} >
    <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
        <IoPersonOutline style={{height:20, width:20, marginTop:2, marginLeft:20}}/>
        <div style={{display:'flex', flexDirection:'column', marginLeft:20}}>
        <text style={{fontSize:10, color:'grey'}}>Username</text>
        <input
        type="text"
        value={name}
        onChange={handleName}
        style={{color:'black'}}
        />
        </div>
        <IoPencilSharp style={{height:20, width:20, marginTop:2, marginLeft:20, color:'grey'}}/>
    </div>
</div>
<div style={{height:70, width:350, borderRadius:50, marginLeft:40, marginTop:10}} >
    <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
        <IoPersonOutline style={{height:20, width:20, marginTop:2, marginLeft:20}}/>
        <div style={{display:'flex', flexDirection:'column', marginLeft:20}}>
        <text style={{fontSize:10, color:'grey'}}>Phone</text>
        <input
        type="text"
        value={number}
        onChange={handleNumber}
        style={{color:'black'}}
        />
        </div>
        <IoPencilSharp style={{height:20, width:20, marginTop:2, marginLeft:20, color:'grey'}}/>
    </div>
</div>
<div style={{height:70, width:350, borderRadius:50, marginLeft:40, marginTop:10}} >
    <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
        <IoMailOutline style={{height:20, width:20, marginTop:2, marginLeft:20}}/>
        <div style={{display:'flex', flexDirection:'column', marginLeft:20}}>
        <text style={{fontSize:10, color:'grey'}}>Email</text>
        <input
        type="text"
        value={email}
        onChange={handleEmail}
        style={{color:'black'}}
        />
        </div>
        <IoPencilSharp style={{height:20, width:20, marginTop:2, marginLeft:20, color:'grey'}}/>
    </div>
</div>
<div style={{height:70, width:350, borderRadius:50, marginLeft:40, marginTop:10}} >
    <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
        <IoLocationOutline style={{height:20, width:20, marginTop:2, marginLeft:20}}/>
        <div style={{display:'flex', flexDirection:'column', marginLeft:20}}>
        <text style={{fontSize:10, color:'grey'}}>Location</text>
        <input
        type="text"
        value={location}
        onChange={handleLocation}
        style={{color:'black'}}
        />
        </div>
        <IoPencilSharp style={{height:20, width:20, marginTop:2, marginLeft:20, color:'grey'}}/>
    </div>
</div>
<LinearBtn text={"Set New Password"} loc={"/changepswd"}/>
        </div>
    )
}