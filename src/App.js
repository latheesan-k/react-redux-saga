import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { helloWorldRequest } from "./actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.helloWorldRequest();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.responseText}</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({ responseText: state.helloWorldReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ helloWorldRequest }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
