import React, { Component } from "react";
import Child1 from "./Child1";
import myContext from "./Context";
var value;
export default class Parent extends Component {
  render() {
    return (
      <div>
        Parent
        <hr />
        <myContext.Provider value="1000">
          <Child1 a="100" />
        </myContext.Provider>
      </div>
    );
  }
}
