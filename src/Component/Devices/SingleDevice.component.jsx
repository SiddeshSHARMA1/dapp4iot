import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { watchDevice } from "../../Utilities/firebase";
import SignalStatus from "../Utils/SignalStatus";

export default function SingleDevice({ eachDevice }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    watchDevice("", (isActive) => setIsActive(isActive));
    return () => {
        clearInterval()
    }
  }, []);

  return (
    <>
      <Button
        style={{
          width: "170px",
          height: "80px",
          borderRadius: "10px",
          padding: "1px",
          margin: "0px 5px",
          border: '1px solid black',
          justifyContent: 'space-evenly'
        }}
      >
        <div style={{height: '20px', width: '20px'}}>
          <SignalStatus color={isActive ? 'green' : 'red'}/>
        </div>
        <p style={{ fontWeight: "600" }}>{eachDevice.name || ""}</p>
      </Button>
    </>
  );
}
