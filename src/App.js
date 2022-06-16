import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginOverview from "./Pages/Login/LoginOverview";
import { useEffect, useState } from "react";
import LandingpageOverview from "./Pages/LandingPage/LandingpageOverview";
import DashboardOverview from "./Pages/DashBoard/DashboardOverview";
import { isHyperledgerActive } from "./Component/HyperLedgerApi/Hl";

//Hirerchy  Auth-> dashboard ->

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isHLActive, setIsHLActive] = useState(false)

  useEffect(() => {
    isHyperledgerActive((err, res) => {
      if(!err){
        setIsHLActive(true)
      }
    })
  }, [])
  

  
  return (
    <div className="App">
      <Routes>
        {/* WelcomePage */}
        <Route path="/" element={<LandingpageOverview setLoggedInUser={setLoggedInUser}/>} />
        {/* login Page */}
        <Route path='/login' element={<LoginOverview loggedInUser={loggedInUser}/>} />
        {/* dashboard */}
        <Route path='/dashboard' element={<DashboardOverview loggedInUser={loggedInUser} isHLActive={isHLActive}/>}/>                                                                                                                                                                                                                                                                                                                                                                         

      </Routes>
    </div>
  );
}

export default App;
