import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class Cpu extends Component {
  render() {
    return (
      <div className="Cpu container pt-2">
        <Card>
          <CardBody style={{ backgroundColor: "#1d212f" }}>
            <CardTitle>CPU</CardTitle>
            <CardSubtitle>{this.props.cpu[0].name}</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Cpu;
