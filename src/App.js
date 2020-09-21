import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#1d212f" }}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
