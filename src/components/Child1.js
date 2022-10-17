import React, { Component } from "react";
import Child2 from "./Child2";

export default class Child1 extends Component {
  render() {
    return (
      <div>
        Child1 {this.props.a}
        <hr />
        <Child2 b="200" />
      </div>
    );
  }
}
