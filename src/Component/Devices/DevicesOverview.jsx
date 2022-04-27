import React from "react";

export default function DevicesOverview({ devices }) {
  return (
    <div style={{display: 'flex'}}>
      {devices.map(() => (<div
        style={{
          width: "170px",
          height: "80px",
          backgroundColor: "green",
          borderRadius: "10px",
          padding: "1px",
          margin: '0px 5px'
        }}
      >
        <p style={{fontWeight: '600'}}>Device 1</p>
      </div>))}
    </div>
  );
}
