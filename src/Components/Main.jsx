import React, { Component } from "react";
import MainNav from "./MainNav";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Cpu from "./Cpu";
import Gpu from "./Gpu";
import cpu from "../Components/Assets/Cpu";
import gpu from "../Components/Assets/gpu";
import home from "../Components/home";
import build from "../Components/build";

class Main extends Component {
  state = {};
  render() {
    console.log(cpu);
    return (
      <React.Fragment>
        <MainNav />
        <Switch>
          <Route path="/cpu" component={() => <Cpu cpu={cpu} />} />
          <Route path="/gpu" component={() => <Gpu gpu={gpu} />} />
          <Route path="/home" component={home} />
          <Route path="/build" component={build} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
