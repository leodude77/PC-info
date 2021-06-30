import React, { useState } from "react";

const CpuForm = () => {
    const [state, setState] = useState({
        component: null,
        name: "",
        price: "",
        brand: "",
        coreCount: "",
        password: "",
        threadCount: "",
        boostClock: "",
        baseClock: "",
        tdp: "",
        imgLink: "",
        prodLink: "",
      });

      async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://pc-info-api.herokuapp.com/cpu", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(state), // body data type must match "Content-Type" header
        });
        if (response.status === 401) {
          alert("Unauthorized");
        } else {
          alert(`Product ${state.name} added succesfully`);
          setState({
            component: null,
            name: "",
            price: "",
            brand: "",
            coreCount: "",
            password: "",
            threadCount: "",
            boostClock: "",
            baseClock: "",
            tdp: "",
            imgLink: "",
            prodLink: "",
          });
        }
      }

      function handleChange(e) {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
      }
    return <form method="post" onSubmit={(e) => handleSubmit(e)}>
    <div className="formInput">
      <label htmlFor="name">Enter Name:</label>
      <input
        type="text"
        name="name"
        required
        value={state.name}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="brand">Brand </label>
      <input
        type="text"
        name="brand"
        required
        value={state.brand}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="coreCount">Core Count:</label>
      <input
        type="text"
        name="coreCount"
        required
        value={state.coreCount}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="threadCount">Thread Count:</label>
      <input
        type="text"
        name="threadCount"
        required
        value={state.threadCount}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="baseClock">Base Clock Speed </label>
      <input
        type="text"
        name="baseClock"
        required
        value={state.baseClock}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="boostClock">Boost Clock Speed </label>
      <input
        type="text"
        name="boostClock"
        required
        value={state.boostClock}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="tdp">TDP </label>
      <input
        type="text"
        name="tdp"
        required
        value={state.tdp}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="imgLink">Image Link </label>
      <input
        type="text"
        name="imgLink"
        required
        value={state.imgLink}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="prodLink">Product Link </label>
      <input
        type="text"
        name="prodLink"
        required
        value={state.prodLink}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        required
        value={state.price}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <label htmlFor="password">DB Pass</label>
      <input
        type="password"
        name="password"
        required
        value={state.pass}
        onChange={(e) => handleChange(e)}
      />
    </div>
    <div className="formInput">
      <input type="submit"/>
    </div>
  </form>
}

export default CpuForm;