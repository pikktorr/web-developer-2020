import React from "react";
import logo from "../logo.svg";

const Page2 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <h1>This is the SECOND PAGE</h1>
    <button className="button" onClick={() => onRouteChange("page1")}>
      Page1
    </button>
    <button className="disabled">Page2</button>
    <button className="button" onClick={() => onRouteChange("page3")}>
      Page3
    </button>
  </div>
);

export default Page2;
