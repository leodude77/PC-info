import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cpu from "../Components/Assets/Cpu";

class Cpu extends Component {
  render() {
    const cpus = cpu.map((cpu) => {
      return (
        <div className="mt-4">
          <h1 style={{ margin: "50px" }}>
            <b>{cpu.name}</b>
          </h1>
          <div
            className="row ce p-2 m-3 cardsize amdcpu"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(cpu.link, "_blank")}
          >
            <div className="col-lg-7">
              <img className="ce " src={cpu.img} style={{ maxWidth: "100%" }} />
            </div>

            <div className="col-12 col-lg-5 mt-4">
              <table className="table table-striped" style={{ color: "white" }}>
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
            <b>CPU</b>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem unde, omnis autem, sunt laboriosam odio eveniet
            voluptatem, qui in consectetur quos hic. Nemo atque sint consectetur
            sunt molestias pariatur quo!
          </p>
        </div>

        <div className="col-12 ce" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="col-12 col-sm-10 offset-sm-1 ce p-2">
            <a
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
              />
            </a>
          </div>
        </div>
        <hr className="hr" />
        <nav class="nav nav-pills flex-column flex-sm-row">
          <a class="flex-sm-fill text-sm-center nav-link active" href="#">
            AMD RYZEN
          </a>
          <a class="flex-sm-fill text-sm-center nav-link" href="#">
            INTEL
          </a>
        </nav>
        {cpus}
      </div>
    );
  }
}

export default Cpu;
