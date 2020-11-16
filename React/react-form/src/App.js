import React from "react";
import "./App.css";
import PhoneEmailFormClass from "./components/PhoneEmailFormClass";
import UserPhoneFromClass from "./components/UserPhoneFormClass";
import EmailNameFormHooks from "./components/EmailNameFormHooks";

function App() {
  return (
    <div className="App">
      {/* <PhoneEmailFormClass /> */}
      <EmailNameFormHooks />
      {/* <UserPhoneFromClass /> */}
    </div>
  );
}

export default App;
