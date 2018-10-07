import React, { Component } from "react";

import "./App.css";
import HelloWorld from "../containers/HelloWorld/HelloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld />
        </header>
      </div>
    );
  }
}

export default App;
