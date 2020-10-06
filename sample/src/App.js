import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "John" };
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ message: " Sorry" }, () => console.log(this.state));
        }}
      >
        OK
      </button>
    );
  }
}

export default App;
