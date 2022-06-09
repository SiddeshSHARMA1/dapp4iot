import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DashBoardOverview from "../../Component/Dashboard/DashBoardOverview/DashboardOverview";
import { addDevice, getDevices } from "../../Utilities/firebase";


export default function DashboardOverview({ loggedInUser }) {
  const [devices, setDevices] = useState([]);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const [timeInterval, setTimeInterval] = useState(5);
  //api calls
  // get devices mapped to user

  const navigate = useNavigate();

  useEffect(() => {
    getDevices(loggedInUser.uid).then((res) => setDevices(res));
  }, [refreshCounter]);
  
  function AddDevice(deviceMeta) {
    return new Promise((resolve, reject) => {
      try {
        addDevice({ ...deviceMeta, uid: loggedInUser.uid });
        setRefreshCounter(refreshCounter + 1);
        resolve({ ...deviceMeta, uid: loggedInUser.uid });
      } catch (error) {
        reject(error);
      }
    });
  }

  if (!loggedInUser.uid) {
    setInterval(() => {
      setTimeInterval(timeInterval - 1);
    }, 1000);
  }
  useEffect(() => {
    return () => {
      clearInterval();
    };
  }, []);

  useEffect(() => {
    if (timeInterval === 0) {
      navigate("/");
    }
  }, [timeInterval]);

  return loggedInUser.uid ? (
    <>
      <DashBoardOverview
        devices={devices}
        currentUser={loggedInUser}
        onDeviceAdd={AddDevice}
        setRefreshCounter={setRefreshCounter}
        refreshCounter={refreshCounter}
      />
    </>
  ) : (
    <>
      <h1 style={{ color: "black" }}>Not Logged In</h1>
      <span style={{ color: "black" }}>Redirecting in {timeInterval}</span>
    </>
  );
}
