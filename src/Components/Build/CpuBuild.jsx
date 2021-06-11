import React from "react";

function CpuBuild(props) {
  if (props.props.cpus) {
    const options = props.props.cpus.map((cpu) => {
      return <option value={cpu.name}>{cpu.name}</option>;
    });
    return (
      <div className="align-items-center row pt-4">
        <div className="col-md-3">
          <label className="buildFont">CPU</label>
          <select
            className="custom-select"
            name="cpuName"
            onChange={props.props.handler}
            defaultValue=""
          >
            <option hidden value="">
              Select CPU
            </option>
            {options}
          </select>
          <div className="align-items-center col-12 pt-4">
            <h2 className="buildFont price">
              {props.props.price ? "Rs. " + props.props.price : ""}
            </h2>
          </div>
        </div>
        <div className="col-md-9">
          <img src={props.props.img} alt="" style={{ maxWidth: "50%" }} />
        </div>
      </div>
    );
  } else return <div></div>;
}

export default CpuBuild;
