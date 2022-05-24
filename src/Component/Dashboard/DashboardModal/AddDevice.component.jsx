import { Button, TextField } from "@material-ui/core";
import React from "react";

export default function AddDeviceModal() {
  return (
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <span style={{ marginTop: "20px" }}>Device Name</span>
        <TextField />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </div>
  );
}
