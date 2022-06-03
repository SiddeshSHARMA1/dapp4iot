import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function AddDeviceModal({
  onDeviceAdd,
  setIsAddDeviceModalOpen,
}) {
  const [name, setName] = useState("");
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
        <TextField onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <Button
          onClick={() => {
            onDeviceAdd({ name: name });
            setIsAddDeviceModalOpen(false);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
