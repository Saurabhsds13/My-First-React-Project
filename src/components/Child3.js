import React, { Component } from "react";
import myContext from "./Context";

export default class Child3 extends Component {
  render() {
    return (
      <div>
        Child3 {this.props.c}{" "}
        <myContext.Consumer>{(value) => <h2>{value}</h2>}</myContext.Consumer>
      </div>
    );
  }
}
