import React, { Component } from "react";
import CpuBuild from "./CpuBuild";
import "../style.css";

class Build extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wattage: 0,
      cpuName: "",
      cpuImg: "",
      cpuWattage: "000 W",
      chipset: "both",
      mb: "",
      mbImg: "",
      mbOption: "",
      gpuName: "",
      gpuImg: "",
      gpuWattage: "000 W",
      psuImg: "",
      psuType: 0,
      ramImg: "",
      price: 0,
      cpuPrice: 0,
      mbPrice: 0,
      gpuPrice: 0,
      ramPrice: 0,
      stoPrice: 0,
      psuPrice: 0,
      ramAmount: "1",
      ramSize: 0,
      stoType: "hdd",
      stoAmount: 0,
    };
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  //calculate total wattage
  calWatt = () => {
    var total_watts =
      parseInt(this.state.cpuWattage.substring(0, 3)) +
      parseInt(this.state.gpuWattage.substring(0, 3));
    total_watts += 300;
    total_watts = total_watts - (total_watts % 50);
    this.setState(
      {
        wattage: total_watts,
      },
      () => {
        this.totalPrice();
      }
    );
  };

  //display Motherboard
  dispMb = () => {
    var actualMbPrice, actualMbImg;

    for (
      var i = 0;
      i < this.props.MB[parseInt(this.state.mb) - 1].boards.length;
      i++
    ) {
      if (
        this.props.MB[parseInt(this.state.mb) - 1].boards[i].name ===
        this.state.mbOption
      ) {
        actualMbPrice = this.props.MB[parseInt(this.state.mb) - 1].boards[i]
          .price;
        actualMbImg = this.props.MB[parseInt(this.state.mb) - 1].boards[i]
          .imgLink;
        break;
      }
    }

    actualMbPrice =
      parseInt(actualMbPrice) * 70 - ((parseInt(actualMbPrice) * 70) % 50);
    this.setState(
      {
        mbImg: actualMbImg,
        mbPrice: actualMbPrice,
      },
      () => {
        this.totalPrice();
      }
    );
  };

  //display cpu
  dispCpu = () => {
    for (var i = 0; i < this.props.CPUS.length; i++) {
      if (this.props.CPUS[i].name === this.state.cpuName) break;
    }
    this.setState(
      {
        cpuImg: this.props.CPUS[i].imgLink,
        cpuPrice: this.props.CPUS[i].price,
        cpuWattage: this.props.CPUS[i].tdp,
      },
      () => {
        this.calWatt();
      }
    );
  };

  //display gpu
  dispGpu = () => {
    for (
      var i = 0;
      i < this.props.GPUS[parseInt(this.state.gpuName) - 1].aibs.length;
      i++
    ) {
      if (
        this.state.gpuOption ===
        this.props.GPUS[parseInt(this.state.gpuName) - 1].aibs[i].name
      ) {
        break;
      }
    }
    let price = this.props.GPUS[parseInt(this.state.gpuName) - 1].aibs[i].price;
    price = parseInt(price) * 70 - ((parseInt(price) * 70) % 50);
    this.setState(
      {
        gpuImg: this.props.GPUS[parseInt(this.state.gpuName) - 1].aibs[i]
          .imgLink,
        gpuPrice: price,
        gpuWattage: this.props.GPUS[parseInt(this.state.gpuName) - 1].watt,
      },
      () => {
        this.calWatt();
      }
    );
  };

  //display power supply
  dispPsu = () => {
    for (var i = 0; i < this.props.PSU.length; i++) {
      if (this.state.psuType === this.props.PSU[i].name) {
        break;
      }
    }
    this.setState(
      {
        psuImg: this.props.PSU[i].img,
        psuPrice: this.props.PSU[i].price,
      },
      () => {
        this.totalPrice();
      }
    );
  };

  //calculate ram price
  calRam = () => {
    this.setState(
      {
        ramPrice:
          (3000 * parseInt(this.state.ramAmount) * this.state.ramSize) / 8,
        ramImg: "https://i.imgur.com/xruEaR4.png",
      },
      () => {
        this.totalPrice();
      }
    );
  };

  //calculate storage price
  calStorage = () => {
    var price, img;
    if (this.state.stoType === "sata") {
      price = parseInt(this.state.stoAmount) * 5000;
      img = "https://i.imgur.com/IKzkznf.png";
    } else if (this.state.stoType === "hdd") {
      price = parseInt(this.state.stoAmount) * 2500;
      img = "https://i.imgur.com/o0igXIi.png";
    } else {
      price = parseInt(this.state.stoAmount) * 10000;
      img = "https://i.imgur.com/2Q14Aiy.png";
    }
    this.setState(
      {
        stoPrice: price,
        stoImg: img,
      },
      () => {
        this.totalPrice();
      }
    );
  };

  displayAllGpuOptions = () => {
    return (
      <select
        className="custom-select"
        name="gpuOption"
        onChange={this.onChangeGpuOptions}
        value={this.state.gpuOption}
      >
        <option hidden value="">
          Select After market Video Card
        </option>
        {this.props.GPUS[parseInt(this.state.gpuName) - 1].aibs.map((m) => {
          return <option value={m.name}>{m.name}</option>;
        })}
      </select>
    );
  };

  displayAllMbOptions = () => {
    return (
      <select
        className="custom-select"
        name="mbOption"
        onChange={this.onChangeMbOptions}
        value={this.state.mbOption}
      >
        <option hidden value="">
          Select After market Motherboard
        </option>
        {this.props.MB[parseInt(this.state.mb) - 1].boards.map((m) => {
          return <option value={m.name}>{m.name}</option>;
        })}
      </select>
    );
  };

  //Calculate Price of build
  totalPrice = () => {
    this.setState({
      price:
        parseInt(this.state.psuPrice) +
        parseInt(this.state.gpuPrice) +
        parseInt(this.state.mbPrice) +
        parseInt(this.state.ramPrice) +
        parseInt(this.state.stoPrice) +
        parseInt(this.state.cpuPrice),
    });
  };

  //onChange handlers for each pc component
  onChangeCpu = (e) => {
    var chip;
    if (e.target.value.substring(0, 3) === "AMD") chip = "amd";
    else chip = "intel";
    this.setState(
      {
        [e.target.name]: e.target.value,
        chipset: chip,
        mb: "",
        mbImg: "",
        mbPrice: 0,
      },
      () => {
        this.dispCpu();
      }
    );
  };

  onChangeMb = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        mbImg: "",
        mbPrice: 0,
        mbOption: "",
      },
      () => {
        this.totalPrice();
      }
    );
  };

  onChangeMbOptions = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.dispMb();
      }
    );
  };

  onChangeGpuOptions = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.dispGpu();
      }
    );
  };

  onChangeGpu = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        gpuImg: "",
        gpuPrice: 0,
        gpuWattage: "000",
        gpuOption: "",
      },
      () => {
        this.calWatt();
      }
    );
  };

  onChangeRam = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.calRam();
      }
    );
  };

  onChangeStorage = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.calStorage();
      }
    );
  };

  onChangePsu = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.dispPsu();
      }
    );
  };

  render() {
    //display mb options based on cpu selected
    const lookup = {
      both: [
        { id: "1", text: "X570" },
        { id: "2", text: "B550" },
        { id: "3", text: "A520" },
        { id: "4", text: "Z490" },
        { id: "5", text: "H470" },
        { id: "6", text: "B460" },
      ],
      amd: [
        { id: "1", text: "X570" },
        { id: "2", text: "B550" },
        { id: "3", text: "A520" },
      ],
      intel: [
        { id: "4", text: "Z490" },
        { id: "5", text: "H470" },
        { id: "6", text: "B460" },
      ],
    };

    return (
      <div className="container">
        <div>
          <h1 className="head">Build your PC</h1>
          <div className="box head">
            <p className="buildFont" style={{ fontSize: "40%" }}>
              Recommended Wattage : <strong>{this.state.wattage} W </strong>
            </p>
            <p className="buildFont" style={{ fontSize: "40%" }}>
              Price total : Rs <strong>{this.state.price}</strong>
            </p>
          </div>
          <div>
            <form>
              {/* CPU */}
              <CpuBuild
                props={{
                  cpus: this.props.CPUS,
                  handler: this.onChangeCpu,
                  name: this.state.cpuName,
                  img: this.state.cpuImg,
                  price: this.state.cpuPrice,
                }}
              />

              <div className="horizontal-rule"></div>

              {/* Motherboard */}
              <div className="align-items-center row pt-4">
                <div className="col-md-3">
                  <label className="buildFont">Motherboard</label>
                  <select
                    className="custom-select"
                    name="mb"
                    onChange={this.onChangeMb}
                    value={this.state.mb}
                  >
                    <option hidden value="">
                      Select Motherboard
                    </option>
                    {lookup[this.state.chipset].map((m) => (
                      <option value={m.id}>{m.text}</option>
                    ))}
                  </select>
                  <div className="pt-4">
                    {this.state.mb ? this.displayAllMbOptions() : ""}
                  </div>
                  <div className="align-items-center col-12 pt-4">
                    <h2 className="buildFont price">
                      {this.state.mbPrice ? "Rs. " + this.state.mbPrice : ""}
                    </h2>
                  </div>
                </div>
                <div className="col-md-9" style={{ overflow: "hidden" }}>
                  <img
                    src={this.state.mbImg}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>

              {/* GPU */}
              <div className="horizontal-rule"></div>
              <div className="row  align-items-center pt-4">
                <div className="col-md-3">
                  <label className="buildFont">GPU</label>
                  <select
                    className="custom-select"
                    name="gpuName"
                    onChange={this.onChangeGpu}
                  >
                    <option hidden value="">
                      Select GPU
                    </option>
                    <option value="1">NVIDIA RTX 3090</option>
                    <option value="2">NVIDIA RTX 3080</option>
                    <option value="3">NVIDIA RTX 3070</option>
                    <option value="4">NVIDIA RTX 3060 Ti</option>
                    <option value="5">AMD Radeon RX 6900XT</option>
                    <option value="6">AMD Radeon RX 6800XT</option>
                    <option value="7">AMD Radeon RX 6800</option>
                    <option value="8">AMD Radeon RX 5700XT</option>
                  </select>
                  <div className="pt-4">
                    {this.state.gpuName ? this.displayAllGpuOptions() : ""}
                  </div>
                  <div className="align-items-center col-12 pt-4">
                    <h2 className="buildFont price">
                      {this.state.gpuPrice ? "Rs. " + this.state.gpuPrice : ""}
                    </h2>
                  </div>
                </div>
                <div className="col-md-9">
                  <img
                    src={this.state.gpuImg}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div className="horizontal-rule"></div>

              {/* Ram */}
              <div className="row align-items-center pt-4">
                <div className="col-md-3 ">
                  <label className="buildFont">RAM</label>
                  <select
                    className="custom-select"
                    name="ramSize"
                    id="ramSel"
                    onChange={this.onChangeRam}
                  >
                    <option hidden value="">
                      Select RAM
                    </option>
                    <option value="64">64 gb</option>
                    <option value="32">32 gb</option>
                    <option value="16">16 gb</option>
                    <option value="8">8 gb</option>
                  </select>
                  <div className="align-items-center col-12 pt-4">
                    <h2 className="buildFont price">
                      {this.state.ramPrice ? "Rs. " + this.state.ramPrice : ""}
                    </h2>
                  </div>
                </div>
                <div className="offset-md-1 col-md-3">
                  <label className="buildFont">Number of Sticks</label>
                  <div className="row pl-4">
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ramAmount"
                        value="1"
                        onChange={this.onChangeRam}
                        checked={this.state.ramAmount === "1"}
                      />
                      <label class="form-check-label buildFont">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ramAmount"
                        value="2"
                        onChange={this.onChangeRam}
                        checked={this.state.ramAmount === "2"}
                      />
                      <label class="form-check-label buildFont">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ramAmount"
                        value="3"
                        onChange={this.onChangeRam}
                        checked={this.state.ramAmount === "3"}
                      />
                      <label class="form-check-label buildFont">3</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ramAmount"
                        value="4"
                        onChange={this.onChangeRam}
                        checked={this.state.ramAmount === "4"}
                      />
                      <label class="form-check-label buildFont">4</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <img
                    src={this.state.ramImg}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div className="horizontal-rule"></div>

              {/* Storage */}
              <div className="row align-items-center pt-4">
                <div className="col-md-3">
                  <label className="buildFont">Storage</label>
                  <select
                    className="custom-select"
                    name="stoAmount"
                    onChange={this.onChangeStorage}
                  >
                    <option hidden value="">
                      Select Amount of Storage
                    </option>
                    <option value="4">4 TB</option>
                    <option value="2">2 TB</option>
                    <option value="1">1 TB</option>
                  </select>
                  <div className="align-items-center col-12 pt-4">
                    <h2 className="buildFont price">
                      {this.state.stoPrice ? "Rs. " + this.state.stoPrice : ""}
                    </h2>
                  </div>
                </div>
                <div className="offset-md-1 col-md-4">
                  <label className="buildFont">Type of Storage</label>
                  <div className="row pl-4">
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stoType"
                        value="hdd"
                        onChange={this.onChangeStorage}
                        checked={this.state.stoType === "hdd"}
                      />
                      <label class="form-check-label buildFont" for="hdd">
                        HDD
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stoType"
                        value="sata"
                        onChange={this.onChangeStorage}
                        checked={this.state.stoType === "sata"}
                      />
                      <label class="form-check-label buildFont" for="sata">
                        SATA SSD
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="stoType"
                        value="nvme"
                        onChange={this.onChangeStorage}
                        checked={this.state.stoType === "nvme"}
                      />
                      <label class="form-check-label buildFont" for="nvme">
                        NVME SSD
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <img
                    src={this.state.stoImg}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
              <div className="horizontal-rule"></div>

              {/* Power Supply */}
              <div className="row align-items-center pt-4">
                <div className="col-md-3">
                  <label className="buildFont">Power Supply</label>
                  <select
                    className="custom-select"
                    name="psuType"
                    onChange={this.onChangePsu}
                  >
                    <option hidden value="">
                      Select Power Supply
                    </option>
                    <option value="1200 W">1200 W</option>
                    <option value="750 W">750 W</option>
                    <option value="600 W">600 W</option>
                    <option value="450 W">450 W</option>
                  </select>
                  <div className="align-items-center col-12 pt-4">
                    <h2 className="buildFont price">
                      {this.state.psuPrice ? "Rs. " + this.state.psuPrice : ""}
                    </h2>
                  </div>
                </div>
                <div className="col-md-9">
                  <img
                    src={this.state.psuImg}
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>

              <div style={{ padding: "25px" }}></div>

              {/* final price  */}
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #dbdbdb",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    fontSize: "5vmin",
                    color: "#dbdbdb",
                    fontFamily: "consolas",
                  }}
                >
                  <strong>Final Price : Rs {this.state.price}</strong>
                </p>
              </div>

              <div style={{ padding: "20px" }}></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Build;
