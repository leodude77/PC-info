import React from "react";
import { useEffect } from "react";
import { Tab, Nav } from "react-bootstrap";

const Mb = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }) 
  
    return (
      <div
        className="container p-4 full-height"
        style={{ color: "white", padding: "auto" }}
      >
        <div>
          <b>
            <h1 className="head">
              <b>Motherboard</b>{" "}
            </h1>
          </b>
          <img
            src="https://rog.asus.com/websites/global/products/tjg9re6szyiauhqv/img/kv/pd.png"
            alt=""
            style={{ maxWidth: "60vmin" }}
          />
          <p className="para">
            A motherboard (also called mainboard, main circuit board, system
            board, baseboard, planar board, logic board, or mobo) is the main
            printed circuit board (PCB) in general-purpose computers and other
            expandable systems. It holds and allows communication between many
            of the crucial electronic components of a system, such as the
            central processing unit (CPU) and memory, and provides connectors
            for other peripherals.
          </p>
        </div>
        <div className="horizontal-rule"></div>
        <div class="guide">
          <h3>Compatibility</h3>
          <p>
            Because motherboards connect all of your components together, the
            process for choosing your motherboard comes with a number of
            compatibility considerations:
          </p>
          <ul>
            <li>
              <b>Socket:</b>&nbsp;Your motherboard socket needs to match your
              CPU socket (1151, AM4, etc).
            </li>
            <li>
              <b>Size:</b>&nbsp;The motherboard needs to fit in your case.
              Normal sizes, from small to large, are mini ITX, micro ATX (µATX,
              uATX, or mATX), ATX, and Extended ATX (E-ATX). A smaller
              motherboard will fit in a larger case, but not vice-versa.
            </li>
            <li>
              <b>RAM:</b>&nbsp;Each motherboard (and CPU) will only be
              compatible with certain types of RAM. Most modern motherboard
              options are only compatible with DDR4 RAM.
            </li>
            <li>
              <b>GPU:</b>&nbsp;Your graphics card needs the correct slot on the
              motherboard. For graphics cards released in the last 10 years,
              this is PCIe.
            </li>
            <li>
              <b>PCI components:</b>&nbsp;If you have an old regular PCI card
              that you want to use, such as a sound card, check to see if your
              motherboard has any regular PCI slots. Many modern motherboards
              have only the newer PCIe slots.
            </li>
          </ul>
          <h3>Brands</h3>
          <p>
            <strong>Asus</strong> and <strong>MSI </strong>make excellent
            motherboards. <strong>Gigabyte</strong> and <strong>ASRock</strong>{" "}
            are also good.
          </p>
          <h3>Needs</h3>
          <p>
            Carefully weigh your needs and get a motherboard that matches them.
            Get a motherboard that has the slots and ports that you need for
            your storage and cards. If you intend to overclock, get a
            motherboard that supports overclocking.
          </p>
          <h3>Alternatives</h3>
          <p>
            There are a huge number of motherboard models available from many
            manufacturers, and thus there are plenty of good alternatives for
            each tier that cannot be included on the Logical Increments parts
            list due to space constraints.
          </p>
          <h3>Overclocking</h3>
          <p>
            Overclock only if your motherboard supports it. Low-tier mobos were
            not designed to overclock and have less robust power systems, so get
            a mid-range or high-end mobo and do your research before
            overclocking.
          </p>
          <h3>Power (VRMs, Phases)</h3>
          <p>
            The quality of a motherboard’s power features is a large part of
            what set an expensive motherboard apart from a cheap one. Quality
            motherboards usually possess more or better power phases (more isn't
            automatically better), solid capacitors, ferrite chokes, and MOSFET
            heatsinks are usually present in good-quality mobos. High-end
            motherboards may even have DrMos and tantalum capacitors.
          </p>
          <p>
            You can determine the number of phases by counting the number of
            chokes. Higher is usually better, but going overboard (32 phases)
            does not help much.
          </p>
          <p>
            Low-quality voltage regulator modules (VRMs) are typically the first
            thing to fry, especially if you’re overclocking. Getting something
            good will ensure lower temps, stable/clean power for your CPU, and a
            reliable, long-lasting motherboard.
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
                        <a
                          href="https://en.wikipedia.org/wiki/Overclocking"
                          title="Overclocking"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/DIMM"
                          title="DIMM"
                        >
                          DIMM
                        </a>{" "}
                        slots
                      </th>

                      <td colspan="3">4</td>
                    </tr>
                    <tr>
                      <th>USB: 3.2 Gen 2, 3.2 Gen 1, 2.0</th>

                      <td>1, 2, 6</td>
                      <td>2, 2, 6</td>
                      <td>8, 0, 4</td>
                    </tr>
                    <tr>
                      <th>
                        <a
                          href="https://en.wikipedia.org/wiki/Serial_ATA"
                          class="mw-redirect"
                          title="SATA"
                        >
                          SATA
                        </a>{" "}
                        Ports
                      </th>
                      <td>4</td>
                      <td>6</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <th>PCIe Lanes</th>
                      <td>PCIe 3.0 x 6</td>
                      <td>PCIe 3.0 x 10</td>
                      <td>PCIe 4.0 x 16</td>
                    </tr>
                    <tr>
                      <th>
                        <a href="https://en.wikipedia.org/wiki/AMD_CrossFireX">
                          Crossfire
                        </a>{" "}
                        Support
                      </th>
                      <td colspan="2" style={{ background: "#c74242" }}>
                        No
                      </td>
                      <td style={{ background: "#2fd0a5" }}>Yes</td>
                    </tr>
                    <tr>
                      <th>
                        <a href="https://en.wikipedia.org/wiki/Scalable_Link_Interface">
                          SLI
                        </a>
                      </th>
                      <td style={{ background: "#c74242" }}>No</td>
                      <td colspan="2" style={{ background: "#2fd0a5" }}>
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <a href="https://en.wikipedia.org/wiki/RAID">RAID</a>
                      </th>
                      <td colspan="3">0, 1 ,10</td>
                    </tr>

                    <tr>
                      <th>
                        Chipset{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Thermal_design_power"
                          title="Thermal design power"
                        >
                          TDP
                        </a>
                      </th>
                      <td colspan="2">5W</td>
                      <td>15W</td>
                    </tr>
                    <tr>
                      <th>Release date</th>
                      <td>August 2020</td>
                      <td>June 2020</td>
                      <td>July 2019</td>
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
                        <a
                          href="https://en.wikipedia.org/wiki/Overclocking"
                          title="Overclocking"
                        >
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
                          href="https://en.wikipedia.org/wiki/Comet_Lake_(microprocessor)"
                          class="mw-redirect"
                          title="Comet Lake"
                          target="_blank"
                          rel="noopener noreferrer"
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
                        <a
                          href="https://en.wikipedia.org/wiki/DIMM"
                          title="DIMM"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/Serial_ATA"
                          class="mw-redirect"
                          title="SATA"
                        >
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
                          href="https://en.wikipedia.org/wiki/PCI_Express"
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
                          href="https://en.wikipedia.org/wiki/Platform_Controller_Hub"
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
                        <a
                          href="https://en.wikipedia.org/wiki/IEEE_802.11ax"
                          title="IEEE 802.11ax"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/RAID"
                          title="RAID"
                        >
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
                        <a
                          href="https://en.wikipedia.org/wiki/3D_XPoint"
                          title="3D XPoint"
                        >
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
                          href="https://en.wikipedia.org/wiki/Intel_Active_Management_Technology"
                          title="Intel Active Management Technology"
                        >
                          Active Management
                        </a>
                        ,{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Trusted_Execution_Technology"
                          title="Trusted Execution Technology"
                        >
                          Trusted Execution
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Intel_vPro"
                          title="Intel vPro"
                        >
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
                          href="https://en.wikipedia.org/wiki/Thermal_design_power"
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

export default Mb;
