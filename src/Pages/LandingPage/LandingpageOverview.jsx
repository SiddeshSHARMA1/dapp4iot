import React from "react";
import { queryServer, signInWithGoogle } from "../../Utilities/firebase";

export default function LandingpageOverview() {
  return (
    <div>
      <p>landing page</p>
      <button onClick={() => signInWithGoogle()}>SignIn With google</button>
      <button onClick={() => queryServer()}>qer</button>
    </div>
  );
}
