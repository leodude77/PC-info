import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container p-4" style={{ color: "white", height:"100vh" }}>
        <h1 className="head">About this website</h1>
        <div className="horizontal-rule"></div>
        <div className="buildFont pt-4">
          <p className="para">
            Personal project. Help people learn about pc components and the ability to create your own build.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
