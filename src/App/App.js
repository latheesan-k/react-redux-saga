import React, { Component } from "react";

import HelloWorld from "../HelloWorld/HelloWorld.container";

import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld />
        </header>
      </div>
    );
  }
}

export default App;
