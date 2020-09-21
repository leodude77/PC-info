import React, { Component } from "react";
import MainNav from "./MainNav";
import { Switch, Route, withRouter } from "react-router-dom";
import Cpu from "./Cpu";
import Gpu from "./Gpu";
import cpu from "../Components/Assets/Cpu";

class Main extends Component {
  state = {};
  render() {
    console.log(cpu);
    return (
      <React.Fragment>
        <MainNav />
        <Switch>
          <Route path="/cpu" component={() => <Cpu cpu={cpu} />} />
          <Route path="/gpu" component={Gpu} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
