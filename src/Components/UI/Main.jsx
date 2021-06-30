import React from "react";
import MainNav from "./MainNav";
import { Switch, Route, Redirect } from "react-router-dom";
import Cpu from "../Details/Cpu/Cpu";
import Gpu from "../Details/Gpu/Gpu";
import psu from "../Assets/psu";
import ram from "../Details/Ram";
import storage from "../Details/Storage";
import home from "./home";
import Build from "../Build/Build";
import Mb from "../Details/Mb";
import Footer from "./Footer";
import AddComponent from "../AddApi/AddComponent";

const Main = ({cpu,gpu,mb}) => {
    return (
      <React.Fragment>
        <MainNav />
        <Switch>
          <Route path="/cpu" component={() => <Cpu cpu={cpu} />} />
          <Route path="/gpu" component={() => <Gpu gpu={gpu} />} />
          <Route path="/home" component={home} />
          <Route
            path="/build"
            component={() => <Build CPUS={cpu} GPUS={gpu} PSU={psu} MB={mb} />}
          />
          <Route path="/mb" component={Mb} />
          <Route path="/ram" component={ram} />
          <Route path="/storage" component={storage} />
          <Route path="/addComponent" component={AddComponent} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  
}

export default Main;
