import React, { useEffect } from "react";
import "../../style.css";
import { Nav, Tab } from "react-bootstrap";
import GpuTextInfo from "./GpuTextInfo";

const Gpu = ({gpu}) => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }) 

  
    //var for Nvidia cards
    const nvcard = gpu.map((gpu) => {
      if (gpu.brand === "nvidia")
        return (
          <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{gpu.name}</b>
            </h1>
            <div
              className="row ce p-2 m-3 cardsize nv align-items-center"
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

              <div className="col-12 col-lg-5">
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
                    <td>Base Clock</td>
                    <td>{gpu.bclock}</td>
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
                    <td>Power Draw</td>
                    <td>{gpu.watt}</td>
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
    const amdcard = gpu.map((gpu) => {
      if (gpu.brand === "amd")
        return (
          <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{gpu.name}</b>
            </h1>
            <div
              className="row ce p-2 m-3 cardsize radeon align-items-center"
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

              <div className="col-12 col-lg-5">
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
                    <td>Base Clock</td>
                    <td>{gpu.bclock}</td>
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
                    <td>Power Draw</td>
                    <td>{gpu.watt}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>Rs {gpu.price}</td>
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
        <GpuTextInfo />
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

export default Gpu;
