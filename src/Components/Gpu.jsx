import React, { Component } from "react";
import "./style.css";
import gpucards from "./Assets/gpu";
import { Nav, Tab } from "react-bootstrap";

class Gpu extends Component {
  render() {
    //var for Nvidia cards
    const nvcard = gpucards.map((gpu) => {
      if (gpu.brand === "nvidia")
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
                <img
                  className="ce "
                  src={gpu.img}
                  style={{ maxWidth: "100%" }}
                  alt="gpu"
                />
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
            <div className="horizontal-rule"></div>
          </div>
        );
      else return <div></div>;
    });

    //var for AMD cards
    const amdcard = gpucards.map((gpu) => {
      if (gpu.brand === "amd")
        return (
          <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{gpu.name}</b>
            </h1>
            <div
              className="row ce p-2 m-3 cardsize radeon"
              style={{ cursor: "pointer" }}
              onClick={() => window.open(gpu.link, "_blank")}
            >
              <div className="col-lg-7">
                <img
                  className="ce "
                  src={gpu.img}
                  style={{ maxWidth: "100%" }}
                  alt="Graphic Card"
                />
              </div>

              <div className="col-12 col-lg-5 mt-4">
                <table className="table " style={{ color: "white" }}>
                  <tr>
                    <td>Stream Processors</td>
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
                    <td></td>
                    <td>{gpu.price}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="horizontal-rule"></div>
          </div>
        );
      else return <div></div>;
    });

    return (
      <div className="Cpu container mt-2">
        <div className="p-4">
          <h1 className="head">
            <b>GPU</b>
          </h1>
          <h2>Graphical Processing Unit</h2>
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
              alt="Main card"
            />
          </a>
        </div>
        <div className="horizontal-rule"></div>
        <h1 className="head">
          <b>Latest Generation of GPUS</b>
        </h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="first">NVIDIA</Nav.Link>
            </Nav.Item>

            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="second">AMD RADEON</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">{nvcard}</Tab.Pane>
            <Tab.Pane eventKey="second">{amdcard}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default Gpu;
