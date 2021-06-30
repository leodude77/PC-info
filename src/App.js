import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/UI/Main";
import {Spinner} from "react-bootstrap";

var cpu, gpu, mb;

const App = () =>{
  const [isLoading,setisLoading] = useState(true);

  useEffect(()=>{
    Promise.all([
      fetch("https://aot-time.herokuapp.com/getDetails"),
      fetch("https://pc-info-api.herokuapp.com/"),
    ])
      .then(async ([res1, res2]) => {
        let data1 = await res1.json();
        let data2 = await res2.json();
        return [data1, data2];
      })
      .then(([data1, data2]) => {
        gpu = data1.gpu;
        mb = data1.mb;
        cpu = data2;
      })
      .then(() => {
        setisLoading(false);
      })
      .catch((e) => console.log(e));
  }) 
    if (isLoading) return <div className="spinnerContainer"><Spinner animation="border" /></div>;
    else {
      return (
        <div className="App" style={{ backgroundColor: "#121212" }}>
          <HashRouter>
            <Main cpu={cpu} gpu={gpu} mb={mb} />
          </HashRouter>
        </div>
      );
    }
}

export default App;
