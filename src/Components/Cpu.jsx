import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav } from "react-bootstrap";

class Cpu extends Component {
  displayCpu(key) {
    const cpus = this.props.cpu.map((cpu) => {
      if (cpu.brand === key) {
        return (
          <div className="mt-4">
            <h1 style={{ margin: "50px" }}>
              <b>{cpu.name}</b>
            </h1>
            <div
              className={"row ce  align-items-center cardsize " + key + "cpu"}
              style={{ cursor: "pointer" }}
              onClick={() => window.open(cpu.link, "_blank")}
            >
              <div className="col-lg-7">
                <img
                  className="ce "
                  src={cpu.img}
                  style={{ maxWidth: "100%" }}
                  alt="Cpu"
                />
              </div>

              <div className="col-12 col-lg-5">
                <table className="table " style={{ color: "white" }}>
                  <tr>
                    <td>Number of Cores</td>
                    <td>{cpu.cores}</td>
                  </tr>
                  <tr>
                    <td>Number of Threads</td>
                    <td>{cpu.threads}</td>
                  </tr>
                  <tr>
                    <td>Boost Clock Speed</td>
                    <td>{cpu.boostc}</td>
                  </tr>
                  <tr>
                    <td>Base Clock Speed</td>
                    <td>{cpu.basec}</td>
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

  render() {
    const amdcpus = this.displayCpu("amd");
    const icpus = this.displayCpu("intel");

    return (
      <div className="Cpu container mt-2">
        <div >
          <h1 className="head">
            <b>CPU</b>
          </h1>
          <h2>Central Processing Unit</h2>
          <p>
          A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry within a computer that executes instructions that make up a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions in the program.
          </p>
        </div>

        <div className="col-12 ce" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="col-12 col-sm-10 offset-sm-1 ce p-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.amd.com/system/files/2020-06/ryzen-chip-copper-circuit-board-1260x709.jpg",
                  "_blank"
                )
              }
            >
              <img
                className="ce"
                style={{ maxWidth: "100%" }}
                src="https://www.amd.com/system/files/2020-06/ryzen-chip-copper-circuit-board-1260x709.jpg"
                alt="cpu-ryzen"
              />
            </div>
          </div>
        </div>
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
            <Tab.Pane eventKey="first">{amdcpus}</Tab.Pane>
            <Tab.Pane eventKey="second">{icpus}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default Cpu;
