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
    <div>
      <p>landing page</p>
      <button onClick={() => handleSignIn()}>SignIn With google</button>
      <button onClick={() => queryServer()}>qer</button>
    </div>
  );
}
