import React, { Component } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#121212" }}>
        <HashRouter>
          <Main />
        </HashRouter>
      </div>
    );
  }
}
export default App;
