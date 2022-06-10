import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";
import { queryServer, signInWithGoogle } from "../../Utilities/firebase";

export default function LandingpageOverview({ setLoggedInUser }) {
  const navigate = useNavigate();
  function handleSignIn() {
    signInWithGoogle((user) => {
      setLoggedInUser(user);
      navigate("/dashboard");
    });
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ color: "black", fontFamily: 'arial', fontSize: '48px' }}>DAuth...</h1>

        <Button
          style={{ border: "1px solid black", borderRadius: "10px" }}
          onClick={() => handleSignIn()}
        >
          <img
            height={15}
            width={15}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          />
          <span
            style={{ fontFamily: "arial", fontSize: "14px", margin: "4px" }}
          >
            Continue with google
          </span>
        </Button>
      </div>
    </div>
  );
}
