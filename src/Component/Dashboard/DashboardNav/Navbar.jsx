import React from "react";
import { Button } from "@material-ui/core";
import {
  DashBoard,
  Logout,
  Manage,
  Settings,
  StatsSvg,
} from "../../Utils/AllSvg";
import { useNavigate } from "react-router";
import { logOut } from "../../../Utilities/firebase";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "#0C0B0B",
          height: "90%",
          borderRadius: "20px",
          minWidth: "180px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "600" }}>DAuth.</p>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              marginBottom: "80%",
            }}
          >
            <Button
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "12px",
                margin: "10px 0px",
              }}
            >
              <DashBoard />
              <p style={{ margin: "0px 10px" }}>DashBoard</p>
            </Button>
            <Button
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "12px",
                margin: "10px 0px",
              }}
            >
              <StatsSvg />
              <p style={{ margin: "0px 10px" }}>Statistics</p>
            </Button>
            <Button
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "12px",
                margin: "10px 0px",
              }}
            >
              <Manage />
              <p style={{ margin: "0px 10px" }}>Manage</p>
            </Button>
            <Button
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "12px",
                margin: "10px 0px",
              }}
            >
              <Settings />
              <p style={{ margin: "0px 10px" }}>Settings</p>
            </Button>
          </div>
          <div style={{}}>
            <Button
              style={{
                color: "white",
                textTransform: "none",
                fontSize: "12px",
                margin: "10px 0px",
              }}
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
              <Logout />
              <p style={{ margin: "0px 10px" }}>Logout</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
