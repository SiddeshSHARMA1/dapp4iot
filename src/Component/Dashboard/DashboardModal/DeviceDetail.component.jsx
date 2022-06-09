import { Button } from "@material-ui/core";
import React from "react";

export default function DeviceDetail({ device, onClose, onDelete }) {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "20%",
          backgroundColor: "cornsilk",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          color: "black",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>DeviceDetail.component</div>
        <Button onClick={() => onDelete(device)}>Delete</Button>
      </div>
    </>
  );
}
