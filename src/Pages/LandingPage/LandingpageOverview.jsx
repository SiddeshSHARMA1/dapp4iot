import React from "react";
import { signInWithGoogle } from "../../Utilities/firebase";

export default function LandingpageOverview() {
  return (
    <div>
      <p>landing page</p>
      <button onClick={() => signInWithGoogle()}>SignIn With google</button>
    </div>
  );
}
