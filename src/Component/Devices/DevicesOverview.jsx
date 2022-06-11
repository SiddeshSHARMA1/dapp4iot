import { Button } from "@material-ui/core";
import React from "react";
import { Plus } from "react-feather";
import { putDate, watchDevice } from "../../Utilities/firebase";
import SingleDevice from "./SingleDevice.component";

export default function DevicesOverview({ devices, onAddDeviceModalOpen, disableAdd }) {
  return (
    <div style={{ display: "flex" }}>
      {/* <Button onClick={() => putDate()}>push</Button> */}
      {devices.map((eachDevice) => {
        return <SingleDevice eachDevice={eachDevice} />;
      })}
      <Button
        style={{
          width: "170px",
          height: "80px",
          borderRadius: "10px",
          padding: "1px",
          border: "1px solid black",
          margin: "0px 5px",
          display: disableAdd ? 'none' : 'block'
        }}
        onClick={onAddDeviceModalOpen}
      >
        <Plus />
      </Button>
    </div>
  );
}
