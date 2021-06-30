import React, { useEffect } from "react";
import "../../style.css";
import { Tab, Nav} from "react-bootstrap";
import CpuTextInfo from "./CpuTextInfo";

const Cpu = ({cpu}) =>{
  
  useEffect (() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })

  const displayCpu = (key) => {
    const cpus = cpu.map((cpu) => {
      if (cpu.brand === key) {
        return (
          <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{cpu.name}</b>
            </h1>
            <div
              className={"row ce  align-items-center cardsize " + key + "cpu"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open(cpu.prodLink, "_blank")}
            >
              <div className="col-lg-7">
                <img
                  className="ce"
                  src={cpu.imgLink}
                  style={{ maxWidth: "100%" }}
                  alt="Cpu"
                />
              </div>

              <div className="col-12 col-lg-5">
                <table className="table " style={{ color: "white" }}>
                  <tr>
                    <td>Number of Cores</td>
                    <td>{cpu.coreCount}</td>
                  </tr>
                  <tr>
                    <td>Number of Threads</td>
                    <td>{cpu.threadCount}</td>
                  </tr>
                  <tr>
                    <td>Boost Clock Speed</td>
                    <td>{cpu.boostClock}</td>
                  </tr>
                  <tr>
                    <td>Base Clock Speed</td>
                    <td>{cpu.baseClock}</td>
                  </tr>
                  <tr>
                    <td>TDP</td>
                    <td>{cpu.tdp}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>Rs {cpu.price}</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="horizontal-rule"></div>
          </div>
        );
      } else return <div></div>;
    });
    return cpus;
  }

  const amdCpus = displayCpu("amd");
  const intelCpus = displayCpu("intel");

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
            <Tab.Pane eventKey="first">{amdCpus}</Tab.Pane>
            <Tab.Pane eventKey="second">{intelCpus}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        
      </div>
    );
  
}

export default Cpu;
