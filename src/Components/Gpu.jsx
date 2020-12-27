import React, { Component } from "react";
import "./style.css";
import { Nav, Tab } from "react-bootstrap";

class Gpu extends Component {
  render() {
    //var for Nvidia cards
    const nvcard = this.props.gpu.map((gpu) => {
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
    const amdcard = this.props.gpu.map((gpu) => {
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
        <div >
          <h1 className="head">
            <b>GPU</b>
          </h1>
          <h3>Graphical Processing Unit</h3>
          <p className="para">
          A graphics processing unit (GPU) is a specialized, electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device. 
          </p>
        </div>
        <div className="col ce p-2" style={{ backgroundColor: "#f5f5f5" }}>
          <a href="https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all">
            <img
              className="ce"
              style={{ maxWidth: "100%" }}
              src="https://venturebeat.com/wp-content/uploads/2018/04/evga-gtx-1080-100663485-orig.png?fit=400%2C259&strip=all"
              alt="Main card"
            />
          </a>
        </div>
        <div className="horizontal-rule"></div>
        <div className="guide">
          <h3>Brands</h3>
          <p>Almost all graphics cards use “<em>reference designs</em>,” meaning they were designed by the GPU maker (<strong>AMD</strong> or <strong>NVIDIA</strong>), and then manufactured by a third party, such as ASUS or EVGA. <a href="https://www.asus.com/me-en/Graphics-Cards/" target="_blank" rel="noopener noreferrer">ASUS</a>, <a href="https://www.evga.com/" target="_blank" rel="noopener noreferrer">EVGA</a>, <a href="https://www.gigabyte.com/" target="_blank" rel="noopener noreferrer">Gigabyte</a>, <a href="https://www.msi.com/index.php" target="_blank" rel="noopener noreferrer">MSI</a>, <a href="https://www.sapphiretech.com/" target="_blank" rel="noopener noreferrer">Sapphire</a>, <a href="http://www.xfxforce.com/" target="_blank" rel="noopener noreferrer">XFX</a>, and <a href="https://www.zotac.com/" target="_blank" rel="noopener noreferrer">Zotac</a> are all good brands.</p>
          <p>The main differences among these brands come down to the <strong>quality of the heatsink, warranty, and customer support.</strong></p>
          <h3>Tiers</h3>
          <p>A general guide:</p>
          <ul>
              <li><strong>Sub 8000</strong> is <em>low tier</em>. Play old (pre-2008) games easily, and modern games on low or not at all.</li>
              <li><strong>10000-25000</strong> is <em>mid tier</em>. Play modern games at medium settings, at 1080p.</li>
              <li><strong>25000-50000</strong> is <em>high tier</em>. Play modern games on high or max settings, at 1080p or 1440p.</li>
              <li><strong>Above 50000</strong> is <em>very-high/flagship tier</em>. "Flagship tier" is suitable for 1440p to 4K gaming, or for multi-monitor gaming systems. &nbsp;</li>
          </ul>
          <h3>Resolution</h3>
          <p><strong>Your resolution typically has the greatest impact on your GPU's performance</strong>. 1920x1080, also known as <em><strong>1080p</strong></em>, is the most common resolution for modern gaming, but a mid-tier/low-tier GPU may play modern games more easily at reduced resolutions. Higher-end GPUs are capable of playing some games at resolutions above 1080p, such as 2560x1440 (<em><strong>1440p</strong></em>) or 3840x2160 (<em><strong>4K</strong></em>). &nbsp;</p>
          <h3>Multi-GPU Systems</h3>
          <p>The amount of additional performance gained from additional GPUs will vary depending on the game, but it will always be less than 100% increase. Having two GPUs will generally get you between <strong>60-80 percent performance improvement</strong> over one GPU. A third GPU will often add at least another 20 percent to your performance compared to two GPUs, which is generally not very efficient. A fourth GPU usually doesn’t help much at all, and in many cases the framerate even decreases when compared to three GPUs.</p>
          <p>Note that multi-GPU setups may have <strong>issues with temperature, noise, power draw, game compatibility, and future upgrades</strong>. The fewer GPUs, the less chance you have of running into these issues. &nbsp;</p>
          <h3>Heatsink + Fan (HSF)</h3>
          <p><strong>Most graphic cards with reference designs have similar or identical performance, noise, and temperatures</strong>, since the internals and HSF are similar. Only the sticker outside is different.</p>
          <p><strong>Cards with custom HSFs cost more money, but may have superior cooling, better overclockability or lower noise</strong>. Examples: MSI's Twin Frozr, Gigabyte's Windforce, ASUS' STRIX, EVGAs iCX. However, especially on lower-tier cards, custom HSFs may be used to lower costs for the manufacturer, and may perform worse than the reference model. Also, non-reference HSFs usually exhaust the hot air back into the case rather than out the back, which can make them perform worse if your case has poor airflow.</p>
        </div>
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
}

export default Gpu;
