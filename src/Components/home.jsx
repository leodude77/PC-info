import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container full-height p-4" style={{ color: "white" }}>
        <h1 className="head">About this website</h1>
        <div className="horizontal-rule"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          blanditiis doloribus repellendus hic cumque, maiores eligendi
          recusandae quibusdam. Id aliquid numquam rerum reprehenderit nisi
          itaque illo repudiandae optio impedit repellendus.
        </p>
      </div>
    );
  }
}

export default Home;
