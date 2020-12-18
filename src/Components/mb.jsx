import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";

class Mb extends Component {
  state = {};
  render() {
    return (
      <div
        className="container p-4 full-height"
        style={{ color: "white", padding: "auto" }}
      >
        <div >
          <b>
            <h1 className="head"><b>Motherboard</b>  </h1>
          </b>
          <img src="https://rog.asus.com/websites/global/products/tjg9re6szyiauhqv/img/kv/pd.png" alt="" style={{maxWidth: "60vmin"}}/>
          <p>
          A motherboard (also called mainboard, main circuit board, system board, baseboard, planar board, logic board,[1] or mobo) is the main printed circuit board (PCB) in general-purpose computers and other expandable systems. It holds and allows communication between many of the crucial electronic components of a system, such as the central processing unit (CPU) and memory, and provides connectors for other peripherals.
          </p>
        </div>
        <div className="horizontal-rule"></div>
        <h1 className="head">
          <b>Latest Generation of Chipsets</b>
        </h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="first">AMD Platform</Nav.Link>
            </Nav.Item>

            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="second">INTEL Platform</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div>
                <table
                  class="table table-striped table-dark table-bordered  "
                  style={{ textAlign: "center", maxWidth: "100%" }}
                >
                  <tbody style={{ maxWidth: "100%" }}>
                    <tr>
                      <th scope="col" width="16%"></th>

                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow noopener noreferrer"
                            class="external text"
                            href="https://www.amd.com/en/chipsets/a520"
                            target="_blank"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            A520
                          </a>
                        </b>
                      </th>
                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow"
                            class="external text"
                            href="https://www.amd.com/en/chipsets/b550"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            B550
                          </a>
                        </b>
                      </th>

                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow"
                            class="external text"
                            href="https://www.amd.com/en/chipsets/x570"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            X570
                          </a>
                        </b>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href="/wiki/Overclocking" title="Overclocking">
                          Overclocking
                        </a>
                      </th>
                      <td
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        No
                      </td>

                      <td
                        colspan="2"
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <th>CPU support</th>
                      <td colspan="2">Zen 2, Zen 3</td>
                      <td>Zen+, Zen 2, Zen 3</td>
                    </tr>
                    <tr>
                      <th>Memory support</th>
                      <td colspan="3">
                        Dual channel DDR4-2666 or DDR4-2933, up to 128GiB using
                        32GiB memory modules
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Maximum{" "}
                        <a href="/wiki/DIMM" title="DIMM">
                          DIMM
                        </a>{" "}
                        slots
                      </th>

                      <td colspan="3">4</td>
                    </tr>
                    <tr>
                      <th>Maximum USB 2.0 ports</th>

                      <td>12</td>
                      <td colspan="2">14</td>
                    </tr>
                    <tr>
                      <th>USB 3.2 ports configuration</th>

                      <td>Up to 8 Gen 1x1 (5Gb/s)</td>
                      <td>
                        Up to 4 Gen 2x1 (10Gb/s) <br /> Up to 8 Gen 1x1 (5Gb/s)
                      </td>
                      <td colspan="1">
                        Up to 6 Gen 2x1 (10Gb/s) <br /> Up to 10 Gen 1x1 (5Gb/s)
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Maximum{" "}
                        <a href="/wiki/SATA" class="mw-redirect" title="SATA">
                          SATA
                        </a>{" "}
                        3.0 ports
                      </th>

                      <td colspan="3">6</td>
                    </tr>
                    <tr>
                      <th>
                        Processor{" "}
                        <a
                          href="/wiki/PCI_Express#PCI_Express_3.0"
                          title="PCI Express"
                        >
                          PCI Express
                        </a>{" "}
                        v3.0 configuration
                      </th>
                      <td colspan="2">1 x 16</td>
                      <td colspan="1">1x16 or 2x8 or 1x8+2x4</td>
                    </tr>
                    <tr>
                      <th>
                        <a
                          href="/wiki/Platform_Controller_Hub"
                          title="Platform Controller Hub"
                        >
                          PCH
                        </a>{" "}
                        PCI Express configuration
                      </th>

                      <td>16</td>
                      <td>20</td>
                      <td colspan="1">24</td>
                    </tr>
                    <tr>
                      <th>Independent Display Support (digital ports/pipes)</th>

                      <td colspan="3">3</td>
                    </tr>
                    <tr>
                      <th>
                        Integrated Wireless (
                        <a href="/wiki/IEEE_802.11ax" title="IEEE 802.11ax">
                          802.11ax
                        </a>
                        )
                      </th>
                      <td
                        colspan="1"
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        No
                      </td>
                      <td
                        colspan="2"
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Intel® Wi-Fi 6 AX201*
                      </td>
                    </tr>
                    <tr>
                      <th>
                        SATA{" "}
                        <a href="/wiki/RAID" title="RAID">
                          RAID
                        </a>{" "}
                        0/1/5/10 support
                      </th>

                      <td
                        colspan="3"
                        rowspan="3"
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <a href="/wiki/3D_XPoint" title="3D XPoint">
                          Intel Optane Memory
                        </a>{" "}
                        Support
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a
                          rel="nofollow"
                          class="external text"
                          href="https://www.intel.com/content/www/us/en/architecture-and-technology/smart-sound-technology.html"
                        >
                          Intel Smart Sound
                        </a>{" "}
                        Technology
                      </th>
                    </tr>
                    <tr>
                      <th>
                        Intel{" "}
                        <a
                          href="/wiki/Intel_Active_Management_Technology"
                          title="Intel Active Management Technology"
                        >
                          Active Management
                        </a>
                        ,{" "}
                        <a
                          href="/wiki/Trusted_Execution_Technology"
                          title="Trusted Execution Technology"
                        >
                          Trusted Execution
                        </a>{" "}
                        and{" "}
                        <a href="/wiki/Intel_vPro" title="Intel vPro">
                          vPro
                        </a>{" "}
                        Technology
                      </th>
                      <td
                        colspan="3"
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        No
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Chipset{" "}
                        <a
                          href="/wiki/Thermal_design_power"
                          title="Thermal design power"
                        >
                          TDP
                        </a>
                      </th>
                      <td colspan="3">6W</td>
                    </tr>
                    <tr>
                      <th>Release date</th>
                      <td colspan="3">Q2 2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>
                <table
                  class="table table-striped table-dark table-bordered  "
                  style={{ textAlign: "center", maxWidth: "100%" }}
                >
                  <tbody style={{ maxWidth: "100%" }}>
                    <tr>
                      <th scope="col" width="16%"></th>

                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow noopener noreferrer"
                            class="external text"
                            href="https://ark.intel.com/content/www/us/en/ark/products/201841/intel-b460-chipset.html"
                            target="_blank"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            B460
                          </a>
                        </b>
                      </th>
                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow"
                            class="external text"
                            href="https://ark.intel.com/content/www/us/en/ark/products/201835/intel-h470-chipset.html"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            H470
                          </a>
                        </b>
                      </th>

                      <th scope="col" width="14%">
                        <b>
                          <a
                            rel="nofollow"
                            class="external text"
                            href="https://ark.intel.com/content/www/us/en/ark/products/201834/intel-z490-chipset.html"
                            style={{
                              fontFamily: "Century Gothic",
                              fontSize: "1.7em",
                              textDecoration: "none",
                            }}
                          >
                            Z490
                          </a>
                        </b>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a href="/wiki/Overclocking" title="Overclocking">
                          Overclocking
                        </a>
                      </th>
                      <td
                        colspan="2"
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        Supported in some boards.
                      </td>

                      <td
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <th>CPU support</th>
                      <td colspan="3">
                        <a
                          href="/wiki/Comet_Lake#Desktop_processors"
                          class="mw-redirect"
                          title="Comet Lake"
                          target="_blank"
                        >
                          Comet Lake S
                        </a>{" "}
                        (10th Generation)
                      </td>
                    </tr>
                    <tr>
                      <th>Memory support</th>
                      <td colspan="3">
                        Dual channel DDR4-2666 or DDR4-2933, up to 128GiB using
                        32GiB memory modules
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Maximum{" "}
                        <a href="/wiki/DIMM" title="DIMM">
                          DIMM
                        </a>{" "}
                        slots
                      </th>

                      <td colspan="3">4</td>
                    </tr>
                    <tr>
                      <th>Maximum USB 2.0 ports</th>

                      <td>12</td>
                      <td colspan="2">14</td>
                    </tr>
                    <tr>
                      <th>USB 3.2 ports configuration</th>

                      <td>Up to 8 Gen 1x1 (5Gb/s)</td>
                      <td>
                        Up to 4 Gen 2x1 (10Gb/s) <br /> Up to 8 Gen 1x1 (5Gb/s)
                      </td>
                      <td colspan="1">
                        Up to 6 Gen 2x1 (10Gb/s) <br /> Up to 10 Gen 1x1 (5Gb/s)
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Maximum{" "}
                        <a href="/wiki/SATA" class="mw-redirect" title="SATA">
                          SATA
                        </a>{" "}
                        3.0 ports
                      </th>

                      <td colspan="3">6</td>
                    </tr>
                    <tr>
                      <th>
                        Processor{" "}
                        <a
                          href="/wiki/PCI_Express#PCI_Express_3.0"
                          title="PCI Express"
                        >
                          PCI Express
                        </a>{" "}
                        v3.0 configuration
                      </th>
                      <td colspan="2">1 x 16</td>
                      <td colspan="1">1x16 or 2x8 or 1x8+2x4</td>
                    </tr>
                    <tr>
                      <th>
                        <a
                          href="/wiki/Platform_Controller_Hub"
                          title="Platform Controller Hub"
                        >
                          PCH
                        </a>{" "}
                        PCI Express configuration
                      </th>

                      <td>16</td>
                      <td>20</td>
                      <td colspan="1">24</td>
                    </tr>
                    <tr>
                      <th>Independent Display Support (digital ports/pipes)</th>

                      <td colspan="3">3</td>
                    </tr>
                    <tr>
                      <th>
                        Integrated Wireless (
                        <a href="/wiki/IEEE_802.11ax" title="IEEE 802.11ax">
                          802.11ax
                        </a>
                        )
                      </th>
                      <td
                        colspan="1"
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        No
                      </td>
                      <td
                        colspan="2"
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Intel® Wi-Fi 6 AX201*
                      </td>
                    </tr>
                    <tr>
                      <th>
                        SATA{" "}
                        <a href="/wiki/RAID" title="RAID">
                          RAID
                        </a>{" "}
                        0/1/5/10 support
                      </th>

                      <td
                        colspan="3"
                        rowspan="3"
                        style={{ background: "#2fd0a5", textAlign: "center" }}
                        class="table-yes"
                      >
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <a href="/wiki/3D_XPoint" title="3D XPoint">
                          Intel Optane Memory
                        </a>{" "}
                        Support
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <a
                          rel="nofollow"
                          class="external text"
                          href="https://www.intel.com/content/www/us/en/architecture-and-technology/smart-sound-technology.html"
                        >
                          Intel Smart Sound
                        </a>{" "}
                        Technology
                      </th>
                    </tr>
                    <tr>
                      <th>
                        Intel{" "}
                        <a
                          href="/wiki/Intel_Active_Management_Technology"
                          title="Intel Active Management Technology"
                        >
                          Active Management
                        </a>
                        ,{" "}
                        <a
                          href="/wiki/Trusted_Execution_Technology"
                          title="Trusted Execution Technology"
                        >
                          Trusted Execution
                        </a>{" "}
                        and{" "}
                        <a href="/wiki/Intel_vPro" title="Intel vPro">
                          vPro
                        </a>{" "}
                        Technology
                      </th>
                      <td
                        colspan="3"
                        style={{ background: "#c74242", textAlign: "center" }}
                        class="table-no"
                      >
                        No
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Chipset{" "}
                        <a
                          href="/wiki/Thermal_design_power"
                          title="Thermal design power"
                        >
                          TDP
                        </a>
                      </th>
                      <td colspan="3">6W</td>
                    </tr>
                    <tr>
                      <th>Release date</th>
                      <td colspan="3">Q2 2020</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default Mb;
