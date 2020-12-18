import React, { Component } from "react";
import MainNav from "./MainNav";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Cpu from "./Cpu";
import Gpu from "./Gpu";
import cpu from "../Components/Assets/Cpu";
import gpu from "../Components/Assets/gpu";
import ram from "./ram";
import storage from "./storage"
import home from "../Components/home";
import build from "../Components/build";
import mb from "../Components/mb";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Switch>
          <Route path="/cpu" component={() => <Cpu cpu={cpu} />} />
          <Route path="/gpu" component={() => <Gpu gpu={gpu} />} />
          <Route path="/home" component={home} />
          <Route path="/build" component={build} />
          <Route path="/mb" component={mb} />
          <Route path="/ram" component={ram} />
          <Route path="/storage" component={storage} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);