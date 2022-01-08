import React, { useEffect } from "react";
import "../../style.css";
import { Nav, Tab } from "react-bootstrap";
import GpuTextInfo from "./GpuTextInfo";
import {Paginate} from "../Paginate";

const Gpu = ({gpu}) => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }) 

  var nvidia=[],amdRadeon=[],temp;
  for(let g=0; g<gpu.length; g++){
    temp = <div className="mt-4">
    <h1 style={{ margin: "50px" }}>
      <b>{gpu[g].name}</b>
    </h1>
    <div
      className={"row ce p-2 m-3 cardsize align-items-center "+ gpu[g].brand+"gpu"}
      style={{ cursor: "pointer" }}
      onClick={() => window.open(gpu[g].link, "_blank")}
    >
      <div className="col-lg-7">
        <img
          className="ce "
          src={gpu[g].img}
          style={{ maxWidth: "100%" }}
          alt="gpu"
        />
      </div>

      <div className="col-12 col-lg-5">
        <table className="table " style={{ color: "white" }}>
          <tr>
            <td>NVIDIA CUDA Cores</td>
            <td>{gpu[g].cores}</td>
          </tr>
          <tr>
            <td>Boost Clock</td>
            <td>{gpu[g].clock}</td>
          </tr>
          <tr>
            <td>Base Clock</td>
            <td>{gpu[g].bclock}</td>
          </tr>
          <tr>
            <td>Memory Size</td>
            <td>{gpu[g].msize}</td>
          </tr>
          <tr>
            <td>Memory Type</td>
            <td>{gpu[g].mtype}</td>
          </tr>
          <tr>
            <td>Power Draw</td>
            <td>{gpu[g].watt}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{gpu[g].price}</td>
          </tr>
        </table>
      </div>
    </div>
    <div className="horizontal-rule"></div>
  </div>
    if(gpu[g].brand === "nvidia")
      nvidia.push(temp);
    else
      amdRadeon.push(temp);
  }
  
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
            <Tab.Pane eventKey="first"><Paginate items={nvidia} /></Tab.Pane>
            <Tab.Pane eventKey="second"><Paginate items={amdRadeon} /></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  
}

export default Gpu;
