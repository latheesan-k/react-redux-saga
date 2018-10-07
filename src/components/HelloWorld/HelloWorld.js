import React, { Component } from "react";

class HelloWorld extends Component {
  componentDidMount() {
    this.props.helloWorldRequest();
  }

  render() {
    return <p>{this.props.responseText}</p>;
  }
}

export default HelloWorld;
