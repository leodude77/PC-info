import React, { Component } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav } from "react-bootstrap";

class Cpu extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
              onClick={() => window.open(cpu.prodLink, "_blank")}
            >
              <div className="col-lg-7">
                <img
                  className="ce "
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

  render() {
    const amdcpus = this.displayCpu("amd");
    const icpus = this.displayCpu("intel");

    return (
      <div className="Cpu container mt-2">
        <div>
          <h1 className="head">
            <b>CPU</b>
          </h1>
          <h2>Central Processing Unit</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.3" }}>
            A Central Processing Unit (CPU) is the brain of the computer. This
            is what runs all your programs, calculations, and operations.
          </p>
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
          <div className="mt-4 guide" style={{ textAlign: "left" }}>
            <h3>How Powerful does the CPU need to be?</h3>

            <p>
              Modern CPUs are quite powerful, and the cheapest ones would be
              enough for someone simply browsing the web, using Office, and
              watching YouTube or Netflix. Games and serious work applications
              will see significant benefit from more powerful CPUs, and may not
              run at all on a weak CPU.
            </p>

            <h3>AMD or Intel?</h3>

            <p>
              The two major CPU manufacturers are AMD and Intel. Deciding
              between these two brands generally depends on what price bracket
              you are looking at. It is better to evaluate the available
              products to see what fits your needs, instead of comparing
              companies as a whole.
            </p>

            <p>
              <strong>The AMD lineup</strong>&nbsp;(grouped by family):
            </p>

            <ul>
              <li>
                <b>Ryzen 3</b>: 4 core CPUs meant for budget builds. Good for
                everyday usage.
              </li>
              <li>
                <strong>Ryzen 5</strong>: 4 -&nbsp;6 cores, aimed at mid-tier
                builds. Balanced, and a typical choice for AMD gaming systems.
              </li>
              <li>
                <strong>Ryzen 7</strong>: 8 core CPUs, for mid-to-high builds,
                where more power is needed. As more modern games begin
                to&nbsp;take advantage of 8 core systems, those with bigger
                budgets typically pick CPUs from this range for high-end gaming
                rigs.
              </li>
              <li>
                <strong>Ryzen 9</strong>: 12 - 16 cores. For those who need
                serious computing power. Great for those who play games and get
                serious work done on the same machine. Pricey!
              </li>
            </ul>

            <p>
              <strong>The Intel lineup</strong>&nbsp;(grouped by family):
            </p>

            <ul>
              <li>
                Core&nbsp;<b>i3</b>: 2 - 4 cores,&nbsp;good for low-tier and
                mid-tier gaming.
              </li>
              <li>
                Core&nbsp;<b>i5</b>: 4 - 6 cores. A&nbsp;balanced
                choice&nbsp;for Intel gaming builds, but with a price increase.
              </li>
              <li>
                Core&nbsp;<b>i7</b>: 4 - 8 cores. As game developers have begun
                to take advantage of higher core counts, i7 CPUs have become
                common choices for high-end gaming builds. But the performance
                increase comes with a price premium.
              </li>
              <li>
                Core&nbsp;<b>i9</b>: 8-10 core CPUs, typically Intel's best
                performers.
              </li>
            </ul>

            <p>
              <strong>So what is the best CPU?</strong>
            </p>

            <p>Going by price brackets:</p>

            <ul>
              <li>
                A person buying the cheapest possible PC should look into the
                cheapest CPU with an integrated GPU, with a matching mobo.
                Athlons, Celerons, and Pentiums suit this range.
              </li>
              <li>
                If you are on a tight budget (less than Rs. 40000 total PC
                cost), a Ryzen 3 or Core i3 should be good.
              </li>
              <li>
                If you are on a moderate budget (40000 - 80000 total PC cost), a
                Core i5 or Ryzen 5 CPU should be good.
              </li>
              <li>
                With a higher budget (80000 - 150,000 total PC cost), Ryzen 7 or
                Core i7 CPUs are currently the best options.
              </li>
              <li>
                Builders with budgets above Rs. 150,000 for their whole PC
                should consider Core i9 or Ryzen 9 CPUs.
              </li>
            </ul>
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
