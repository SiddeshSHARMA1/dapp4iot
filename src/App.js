import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginOverview from "./Pages/Login/LoginOverview";
import { useState } from "react";
import LandingpageOverview from "./Pages/LandingPage/LandingpageOverview";
import DashboardOverview from "./Pages/DashBoard/DashboardOverview";

//Hirerchy  Auth-> dashboard ->

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});



  return (
    <div className="App">
      <Routes>
        {/* WelcomePage */}
        <Route path="/" element={<LandingpageOverview setLoggedInUser={setLoggedInUser}/>} />
        {/* login Page */}
        <Route path='/login' element={<LoginOverview loggedInUser={loggedInUser}/>} />
        {/* dashboard */}
        <Route path='/dashboard' element={<DashboardOverview loggedInUser={loggedInUser}/>}/>                                                                                                                                                                                                                                                                                                                                                                         

      </Routes>
    </div>
  );
}

export default App;
