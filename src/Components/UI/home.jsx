import React, { Component } from "react";

class Home extends Component {
  state = {
    title: null,
  };

  componentDidMount() {
    fetch("https://pc-info-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => this.setState({ title: data[1].name }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div
        className="container p-4"
        style={{ color: "white", height: "100vh" }}
      >
        <h1 className="head">About this website</h1>
        <div className="horizontal-rule"></div>
        <div className="buildFont pt-4">
          <p className="para">
            Personal project. Help people learn about pc components and the
            ability to create a build. {this.state.title}
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
