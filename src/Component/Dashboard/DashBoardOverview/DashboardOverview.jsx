import React from "react";
import DevicesOverview from "../../Devices/DevicesOverview";
import Navbar from "../DashboardNav/Navbar";

export default function DashBoardOverview() {
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
          <div style={{ height: '180px'}}>
            <p>title</p>
          </div>
          <div style={{margin: '15px'}}>
            <h1>Devices</h1>
            <DevicesOverview
              devices={[
                { id: 1, name: "d1" },
                { id: 2, name: "d2" },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
