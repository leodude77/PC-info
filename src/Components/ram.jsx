import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Ram extends Component {
  

  render() {
    

    return (
      <div className="Cpu container mt-2">
        <div >
          <h1 className="head">
            <b>RAM</b>
          </h1>
          <h2>Random Access Memory</h2>
          <p>
          Random-access memory is a form of computer memory that can be read and changed in any order, typically used to store working data and machine code. A random-access memory device allows data items to be read or written in almost the same amount of time irrespective of the physical location of data inside the memory.
          </p>
        </div>

        <div className="col-12 ce" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="col-12 col-sm-10 offset-sm-1 ce p-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://en.wikipedia.org/wiki/DDR4_SDRAM",
                  "_blank"
                )
              }
            >
              <img
                className="ce"
                style={{ maxWidth: "100%" }}
                src="https://i.imgur.com/5zNkwL6.png"
                alt="cpu-ryzen"
              />
            </div>
          </div>
        </div>
        <div className="horizontal-rule"></div>
        <h1 className="head">
          <b>Details on Double Data Rate 4 RAM</b>
        </h1>

        <table class="table table-striped table-dark table-bordered  "
                  style={{ textAlign: "center", maxWidth: "100%" }}>

        <tbody style={{ maxWidth: "100%" }}>
        <tr>
        <th scope="col" style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}>Standard <br />name
        </th>
        <th scope="col">Memory<br />clock<br /><small>(MHz)</small>
        </th>
        <th scope="col">I/O bus<br />clock<br /><small>(MHz)</small>
        </th>
        <th scope="col">Data<br />rate<br />
        </th>
        <th scope="col">Module<br />name
        </th>
        <th scope="col">Peak trans-<br />fer rate<br /><small>(MB/s)</small>
        </th>
        <th scope="col">Timings<br /><small>CL-tRCD-tRP</small>
        </th>
        <th scope="col">CAS<br />latency<br /><small>(ns)</small>
        </th></tr>
        <tr>
        <td>DDR4-1600J*<br />DDR4-1600K <br />DDR4-1600L</td>
        <td>200</td>
        <td>800</td>
        <td>1600</td>
        <td>PC4-12800</td>
        <td>12800</td>
        <td>10-10-10<br />11-11-11<br />12-12-12</td>
        <td>12.5<br />13.75 <br />15
        </td></tr>
        <tr>
        <td>DDR4-1866L*<br />DDR4-1866M<br />DDR4-1866N</td>
        <td>233.33</td>
        <td>933.33</td>
        <td>1866.67</td>
        <td>PC4-14900</td>
        <td>14933.33</td>
        <td>12-12-12<br />13-13-13<br />14-14-14</td>
        <td>12.857<br />13.929<br />15
        </td></tr>
        <tr>
        <td>DDR4-2133N*<br />DDR4-2133P<br />DDR4-2133R</td>
        <td>266.67</td>
        <td>1066.67</td>
        <td>2133.33</td>
        <td>PC4-17000</td>
        <td>17066.67</td>
        <td>14-14-14<br />15-15-15<br />16-16-16</td>
        <td>13.125<br />14.063<br />15
        </td></tr>
        <tr>
        <td>DDR4-2400P*<br />DDR4-2400R<br />DDR4-2400T<br />DDR4-2400U</td>
        <td>300</td>
        <td>1200</td>
        <td>2400</td>
        <td>PC4-19200</td>
        <td>19200</td>
        <td>15-15-15<br />16-16-16<br />17-17-17<br />18-18-18</td>
        <td>12.5 <br />13.32 <br />14.16 <br />15
        </td></tr>
        <tr>
        <td>DDR4-2666T<br />DDR4-2666U<br />DDR4-2666V<br />DDR4-2666W</td>
        <td>333.33</td>
        <td>1333.33</td>
        <td>2666.67</td>
        <td>PC4-21300</td>
        <td>21333.33</td>
        <td>17-17-17<br />18-18-18<br />19-19-19<br />20-20-20</td>
        <td>12.75 <br />13.50 <br />14.25 <br />15
        </td></tr>
        <tr>
        <td>DDR4-2933V<br />DDR4-2933W<br />DDR4-2933Y<br />DDR4-2933AA</td>
        <td>366.67</td>
        <td>1466.67</td>
        <td>2933.33</td>
        <td>PC4-23466</td>
        <td>23466.67</td>
        <td>19-19-19<br />20-20-20<br />21-21-21<br />22-22-22</td>
        <td>12.96 <br />13.64 <br />14.32 <br />15
        </td></tr>
        <tr>
        <td>DDR4-3200W<br />DDR4-3200AA<br />DDR4-3200AC</td>
        <td>400</td>
        <td>1600</td>
        <td>3200</td>
        <td>PC4-25600</td>
        <td>25600</td>
        <td>20-20-20<br />22-22-22<br />24-24-24</td>
        <td>12.5 <br />13.75 <br />15
        </td></tr></tbody></table>
      </div>
    );
  }
}

export default Ram;
