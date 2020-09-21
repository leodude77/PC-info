import React, { Component } from "react";
import "./style.css";

class Gpu extends Component {
  render() {
    return (
      <div className="Cpu container mt-2">
        <div className="p-4">
          <h1>
            <b>GPU</b>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem unde, omnis autem, sunt laboriosam odio eveniet
            voluptatem, qui in consectetur quos hic. Nemo atque sint consectetur
            sunt molestias pariatur quo!
          </p>
        </div>
        <div className="col ce p-2" style={{ backgroundColor: "#f5f5f5" }}>
          <a href="https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all">
            <img
              className="ce"
              src="https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Gpu;
