import { Button } from "@material-ui/core";
import React from "react";
import { Plus } from "react-feather";

export default function DevicesOverview({ devices, onAddDeviceModalOpen }) {
  return (
    <div style={{ display: "flex" }}>
      {devices.map(() => (
        <Button
          style={{
            width: "170px",
            height: "80px",
            backgroundColor: 'wheat',
            borderRadius: "10px",
            padding: "1px",
            margin: "0px 5px",
          }}
        >
          <p style={{ fontWeight: "600" }}>Device 1</p>
        </Button>
      ))}
        <Button
          style={{
            width: "170px",
            height: "80px",
            borderRadius: "10px",
            padding: "1px",
            border: '1px solid black',
            margin: "0px 5px",
          }}
          onClick={onAddDeviceModalOpen}
        >    
          <Plus />
        </Button>
    </div>
    
  );
}
