import React, { Component } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Main from "./Components/UI/Main";

var cpu, gpu, mb;

class App extends Component {
  state = { isLoading: true };

  componentDidMount() {
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
        this.setState({ isLoading: false });
      })
      .catch((e) => console.log(e));
  }
  render() {
    if (this.state.isLoading) return <div>Loading please wait....</div>;
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
}
export default App;
