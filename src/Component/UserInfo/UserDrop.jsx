import { Avatar } from "@material-ui/core";
import React from "react";
import { ArrowDown, ChevronDown } from "react-feather";

export default function UserDrop({ currentUser }) {
  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Avatar src={currentUser.photoURL} style={{ borderRadius: "4px" }} />
       <ChevronDown />     
    </div>
  );
}
