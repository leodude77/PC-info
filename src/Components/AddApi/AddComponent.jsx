import React, { useState } from "react";
import CpuForm from "./CpuForm";
import GpuForm from "./GpuForm";
import "./Style/style.css";

function AddComponent() {

  const [formOption,setFormOption] = useState("CPU");

  const options = ["CPU", "GPU", "Motherboard", "Power Supply"];
  const selectOptions = options.map((key) => (
    <option value={key}>{key}</option>
  ));

  function handleChange (e) {
    setFormOption(e.target.value)
  }


  return (
    <div className="addComponent">
      <h2>Select the component to add</h2>
      <select onChange={handleChange}>{selectOptions}</select>   
    {
        {
          'CPU': <CpuForm />,
          'GPU': <GpuForm />,
          'Motherboard': <p>Still working on it.....</p>,
          'Power Supply': <p>Still working on it.....</p>

        }[formOption]
      }
    </div>
  );
}

export default AddComponent;
