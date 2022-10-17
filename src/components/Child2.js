import React, { Component } from "react";
import Child3 from "./Child3";
import myContext from "./Context";

export default class Child2 extends Component {
  render() {
    return (
      <div>
        Child2 {this.props.b}
        <myContext.Consumer>{(value) => <h2>{value}</h2>}</myContext.Consumer>
        <hr />
        <Child3 c="300" />
        <hr />
      </div>
    );
  }
}
