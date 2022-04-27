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
        <Route path="/" element={<LandingpageOverview />} />
        {/* login Page */}
        <Route path='/login' element={<LoginOverview />} />
        {/* dashboard */}
        <Route path='/dashboard' element={<DashboardOverview />}/>                                                                                                                                                                                                                                                                                                                                                                         

      </Routes>
    </div>
  );
}

export default App;
