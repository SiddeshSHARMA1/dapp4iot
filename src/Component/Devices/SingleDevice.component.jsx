import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { watchDevice } from "../../Utilities/firebase";

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
          backgroundColor: isActive ? 'green' : 'red',
          borderRadius: "10px",
          padding: "1px",
          margin: "0px 5px",
        }}
      >
        <p style={{ fontWeight: "600" }}>{eachDevice.name || ""}</p>
      </Button>
    </>
  );
}
