import React from "react";
import { useSelector } from "react-redux";
import MainApp from "./MainApp";
import SignInScreen from "./SignInScreen";

function App(props) {
  const isSignedIn = useSelector((state) => state.counter.isSignedIn);
  return <div>{isSignedIn ? <MainApp /> : <SignInScreen />}</div>;
}

export default App;
