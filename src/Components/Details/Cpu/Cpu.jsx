import React, { useEffect } from "react";
import "../../style.css";
import { Tab, Nav} from "react-bootstrap";
import CpuTextInfo from "./CpuTextInfo";
import {Paginate} from "../Paginate";

const Cpu = ({cpu}) =>{
  
  useEffect (() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })

  var amdCpus=[],intelCpus=[],temp;
  for(let c=0; c<cpu.length; c++){
    temp = <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{cpu[c].name}</b>
            </h1>
            <div
              className={"row ce  align-items-center cardsize " + cpu[c].brand + "cpu"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open(cpu[c].prodLink, "_blank")}
            >
              <div className="col-lg-7">
                <img
                  className="ce"
                  src={cpu[c].imgLink}
                  style={{ maxWidth: "100%" }}
                  alt="Cpu"
                />
              </div>

              <div className="col-12 col-lg-5">
                <table className="table " style={{ color: "white" }}>
                  <tr>
                    <td>Number of Cores</td>
                    <td>{cpu[c].coreCount}</td>
                  </tr>
                  <tr>
                    <td>Number of Threads</td>
                    <td>{cpu[c].threadCount}</td>
                  </tr>
                  <tr>
                    <td>Boost Clock Speed</td>
                    <td>{cpu[c].boostClock}</td>
                  </tr>
                  <tr>
                    <td>Base Clock Speed</td>
                    <td>{cpu[c].baseClock}</td>
                  </tr>
                  <tr>
                    <td>TDP</td>
                    <td>{cpu[c].tdp}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>Rs {cpu[c].price}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="horizontal-rule"></div>
          </div>
    if(cpu[c].brand === "amd")
      amdCpus.push(temp);
    else
      intelCpus.push(temp);
  }

    return (
      <div className="Cpu container mt-2">
        <CpuTextInfo />
        <div className="horizontal-rule"></div>
        <h1 className="head">
          <b>Latest Generation of CPUS</b>
        </h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="first">AMD RYZEN</Nav.Link>
            </Nav.Item>

            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="second">INTEL</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first"><Paginate items={amdCpus} /></Tab.Pane>
            <Tab.Pane eventKey="second"><Paginate items={intelCpus} /></Tab.Pane>
          </Tab.Content>
        </Tab.Container> 
        
      </div>
    );
  
}

export default Cpu;
