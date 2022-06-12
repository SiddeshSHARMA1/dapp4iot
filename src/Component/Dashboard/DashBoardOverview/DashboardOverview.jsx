import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import { removeDevice } from "../../../Utilities/firebase";
import DevicesOverview from "../../Devices/DevicesOverview";
import UserDrop from "../../UserInfo/UserDrop";
import UserInfo from "../../UserInfo/UserInfo";
import AddDeviceModal from "../DashboardModal/AddDevice.component";
import DeviceDetail from "../DashboardModal/DeviceDetail.component";
import Navbar from "../DashboardNav/Navbar";

export default function DashBoardOverview({
  devices,
  currentUser,
  onDeviceAdd,
  setRefreshCounter,
  refreshCounter,
}) {
  const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);
  const [isDeviceDetailModalOpen, setIsDeviceDetailModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState({});

  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "20px 65px 60px rgba(0, 0, 0, 0.2)",
          padding: "20px 30px",
          display: "flex",
        }}
      >
        <div style={{ width: "180px" }}>
          <Navbar />
        </div>
        <div style={{ color: "black", width: "85%", fontWeight: "500" }}>
          <div
            style={{
              height: "180px",
              margin: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <UserInfo currentUser={currentUser} />
            <UserDrop currentUser={currentUser} />
          </div>
          <div style={{ margin: "15px" }}>
            <h1>Devices</h1>
            <span style={{ marginLeft: "10px" }}>Verified</span>
            <DevicesOverview
              devices={devices}
              onAddDeviceModalOpen={() => setIsAddDeviceModalOpen(true)}
              onDeviceSelect={(device) => {
                setSelectedDevice(device);
                setIsDeviceDetailModalOpen(true);
              }}
            />
            <hr
              style={{
                border: "1px solid black",
                backgroundColor: "black",
                margin: "40px 0px",
              }}
            />
            <span style={{ marginLeft: "10px" }}>Unverified</span>
            <DevicesOverview
              devices={devices}
              onAddDeviceModalOpen={() => setIsAddDeviceModalOpen(true)}
              onDeviceSelect={(device) => {
                setSelectedDevice(device);
                setIsDeviceDetailModalOpen(true);
              }}
              disableAdd
            />
          </div>
        </div>
      </div>
      <Modal
        open={isAddDeviceModalOpen}
        onClose={() => setIsAddDeviceModalOpen(false)}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgb(0,0,0,0)",
          },
        }}
      >
        <AddDeviceModal
          setIsAddDeviceModalOpen={setIsAddDeviceModalOpen}
          currentUser={currentUser}
          onDeviceAdd={onDeviceAdd}
        />
      </Modal>
      <Modal
        open={isDeviceDetailModalOpen}
        onClose={() => setIsDeviceDetailModalOpen(false)}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        BackdropProps={{
          style: {
            backgroundColor: "rgb(0,0,0,0)",
          },
        }}
      >
        <DeviceDetail
          device={selectedDevice}
          onDelete={(device) => {
            removeDevice(device.deviceId);
            setRefreshCounter(refreshCounter + 1);
          }}
          onClose={setIsDeviceDetailModalOpen}
        />
      </Modal>
    </>
  );
}
