import React from "react";

function Home(){
    return (
      <div className="container p-4" style={{ color: "white" }}>
        <h1 className="head">About this website</h1>
        <div className="horizontal-rule"></div>
        <div className="buildFont pt-4">
          <p className="para">
            Personal project. Help people learn about pc components and the
            ability to create a build.
          </p>
        </div>
      </div>
    );
}

export default Home;
