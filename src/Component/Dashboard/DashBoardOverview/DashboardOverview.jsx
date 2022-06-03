import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import DevicesOverview from "../../Devices/DevicesOverview";
import AddDeviceModal from "../DashboardModal/AddDevice.component";
import Navbar from "../DashboardNav/Navbar";

export default function DashBoardOverview({
  devices,
  currentUser,
  onDeviceAdd,
}) {
  const [isAddDeviceModalOpen, setIsAddDeviceModalOpen] = useState(false);

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
          <div style={{ height: "180px" }}>
            <p>title</p>
          </div>
          <div style={{ margin: "15px" }}>
            <h1>Devices</h1>
            <DevicesOverview
              devices={devices}
              onAddDeviceModalOpen={() => setIsAddDeviceModalOpen(true)}
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
      >
        <AddDeviceModal
          setIsAddDeviceModalOpen={setIsAddDeviceModalOpen}
          currentUser={currentUser}
          onDeviceAdd={onDeviceAdd}
        />
      </Modal>
    </>
  );
}
