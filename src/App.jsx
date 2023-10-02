import React from 'react'
import Splash from './screens/Splash'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';
import Signup from './screens/Signup';
import Qr from './screens/Qr';
import Home from './screens/Home';
import ServerList from './screens/ServerList';
import Settings from './screens/Settings';
import UserSetting from './screens/UserSetting';
import ChangePswd from './screens/ChangePswd';
import Success from './screens/Success';
import Fail from './screens/Fail';
import CancelAcc from './screens/CancelAcc';
import EditProfile from './screens/EditProfile';
import Language from './screens/Language';
import Security from './screens/Security';
import HelpCenter from './screens/HelpCenter';
import ReferLink from './screens/ReferLink';
import ReferLink2 from './screens/ReferLink2';
import Plan from './screens/Plan';
import AgreePlan from './screens/AgreePlan';
import ConfirmPlan from './screens/ConfirmPlan';
import PlanEnd from './screens/PlanEnd';
import GetHelp from './screens/GetHelp';
import Privacy from './screens/Privacy';
import Devices from './screens/Devices';
import PremiumAd from './screens/PremiumAd';
import RewardActions from './screens/RewardActions';
import Login from './screens/Login';
import Share from './screens/Share';

export default function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/board1" element={<Step1 />} />
      <Route path="/board2" element={<Step2 />} />
      <Route path="/board3" element={<Step3 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/qr" element={<Qr />} />
      <Route path="/home" element={<Home />} />
      <Route path="/serverlist" element={<ServerList />} />
      <Route path="/settings" element={<Settings />} />    
      <Route path="/usersetting" element={<UserSetting />} />
      <Route path="/changepswd" element={<ChangePswd />} />    
      <Route path="/success" element={<Success />} />        
      <Route path="/fail" element={<Fail />} />            
      <Route path="/cancelacc" element={<CancelAcc />} />      
      <Route path="/editprofile" element={<EditProfile />} />    
      <Route path="/language" element={<Language />} />          
      <Route path="/security" element={<Security />} />          
      <Route path="/helpcenter" element={<HelpCenter />} />      
      <Route path="/referlink" element={<ReferLink/>} />     
      <Route path="/referlink2" element={<ReferLink2/>} />     
      <Route path="/plan" element={<Plan/>} />     
      <Route path="/agreeplan" element={<AgreePlan/>} />   
      <Route path="/confirmplan" element={<ConfirmPlan/>} />     
      <Route path="/planend" element={<PlanEnd/>} />     
      <Route path="/gethelp" element={<GetHelp/>} />     
      <Route path="/privacy" element={<Privacy/>} />     
      <Route path="/devices" element={<Devices/>} />     
      <Route path="/premiumad" element={<PremiumAd/>} />     
      <Route path="/rewardactions" element={<RewardActions/>} />     
      <Route path="/login" element={<Login/>} />          
      <Route path="/share" element={<Share/>} />     
     </Routes>
    </BrowserRouter>
  )
}
