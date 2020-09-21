import React, { Component } from "react";
import "./style.css";
import gpucards from "./Assets/gpu";

class Gpu extends Component {
  render() {
    const gpus = gpucards.map((gpu) => {
      return (
        <div className="mt-4">
          <h1 style={{ margin: "50px" }}>
            <b>{gpu.name}</b>
          </h1>
          <div
            className="row ce p-2 m-3 cardsize nv"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(gpu.link, "_blank")}
          >
            <div className="col-lg-7">
              <img className="ce " src={gpu.img} style={{ maxWidth: "100%" }} />
            </div>

            <div className="col-12 col-lg-5 mt-4">
              <table className="table " style={{ color: "white" }}>
                <tr>
                  <td>NVIDIA CUDA Cores</td>
                  <td>{gpu.cores}</td>
                </tr>
                <tr>
                  <td>Boost Clock</td>
                  <td>{gpu.clock}</td>
                </tr>
                <tr>
                  <td>Memory Size</td>
                  <td>{gpu.msize}</td>
                </tr>
                <tr>
                  <td>Memory Type</td>
                  <td>{gpu.mtype}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{gpu.price}</td>
                </tr>
              </table>
            </div>
          </div>
          <hr className="hr" />
        </div>
      );
    });
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
              style={{ maxWidth: "100%" }}
              src="https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all"
            />
          </a>
        </div>
        <hr className="hr" />
        <nav class="nav nav-pills flex-column flex-sm-row">
          <a class="flex-sm-fill text-sm-center nav-link active" href="#">
            NVIDIA
          </a>
          <a class="flex-sm-fill text-sm-center nav-link" href="#">
            AMD RADEON
          </a>
        </nav>
        {gpus}
      </div>
    );
  }
}

export default Gpu;
