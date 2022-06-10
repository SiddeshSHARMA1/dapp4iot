import React from "react";

export default function UserInfo({currentUser}) {
    console.log(currentUser);
  return (
    <>
      <div
        style={{
          background: "#F5F5F7",
          height: "130px",
          width: "40%",
          borderRadius: "10px",
          paddingTop: '1px'
        }}
      >
        <div style={{marginLeft: '16px'}}>

        <h1 style={{ fontWeight: "400" }}>Hello {currentUser.displayName || ''} !</h1>
        <span>Its good to see you again</span>
        </div>
      </div>
    </>
  );
}
