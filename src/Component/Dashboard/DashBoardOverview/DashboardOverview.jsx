import React from "react";
import Navbar from "../DashboardNav/Navbar";

export default function DashBoardOverview() {
  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "20px 65px 60px rgba(0, 0, 0, 0.2)",
          padding: '20px 30px',
          display: 'flex'
        }}
      >
          <div style={{width: '10%', fontWeight: '600'}}>
              <Navbar />

          </div>
          <div>

          </div>

      </div>
    </>
  );
}
