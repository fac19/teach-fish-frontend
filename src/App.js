import React from "react";
import "./App.css";
import {
  TextButton,
  SignUpButton,
  LogInButton,
} from "./components/global/buttons/Buttons";

function App() {
  return (
    <div className="App">
      <SignUpButton text={"Get Started!"} />
      <LogInButton text={"Log In"} />
      <TextButton />
    </div>
  );
}

export default App;
