import React, { Component, Fragment } from "react";

import logo from "./logo.svg";

class HelloWorld extends Component {
  componentDidMount() {
    this.props.helloWorldRequest();
  }

  render() {
    return (
      <Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.responseText}</p>
      </Fragment>
    );
  }
}

export default HelloWorld;
