import { Button } from "@material-ui/core";
import React from "react";
import { X } from "react-feather";
import { getAllUsers } from "../../../Utilities/firebase";

export default function DeviceDetail({ device, onClose, onDelete }) {
  console.log(device);
  getAllUsers().then((res) => console.log(res))
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "30%",
          backgroundColor: "rgb(0,0,0,0%)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          color: "black",
          alignItems: "center",
          border: "1px solid black",
          backdropFilter: "Blur(10px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            margin: "10px 0px",
          }}
        >
          <span style={{fontSize: '24px'}}>{device.name || ""}</span>
          <Button onClick={() => onClose()}>
            <X />
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            margin: "10px 0px",
          }}
        >
          <div style={{ margin: "5px 0px" }}>
            <span>Added By: </span>
            <span style={{fontSize: '22px'}}>Siddesh Sharma</span>
          </div>
          <div style={{ margin: "5px 0px" }}>
            <span>Last updated by: </span>
            <span style={{fontSize: '22px'}}></span>
          </div>
          <div style={{ margin: "5px 0px" }}>
            <span>State: </span>
            <span style={{fontSize: '22px'}}></span>
          </div>
          <div style={{ margin: "5px 0px" }}>
            <span>State: </span>
            <span style={{fontSize: '22px'}}></span>
          </div>
          <div style={{ margin: "5px 0px" }}>
            <span>State: </span>
            <span style={{fontSize: '22px'}}></span>
          </div>
          <div style={{ margin: "5px 0px" }}>
            <span>State: </span>
            <span style={{fontSize: '22px'}}></span>
          </div>


        </div>

        <Button onClick={() => onDelete(device)}>Delete</Button>
      </div>
    </>
  );
}
