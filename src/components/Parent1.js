import React, { Component } from "react";
import Left from "./Left";
import Right from "./Right";
export default class Parent1 extends Component {
  constructor() {
    super();
    this.state = {
      catname: "XYZ",
    };
    this.dataTransfer = this.dataTransfer.bind(this);
  }
  dataTransfer(rec) {
    console.log("Parent component method", rec);
    console.log(this);
    this.setState({ catname: rec });
  }
  render() {
    return (
      <div clas="container">
        <div class="row">
          <div class="col-xl-3">
            <Left a={this.dataTransfer} />
          </div>
          <div class="col-xl-9">
            <Right b={this.state.catname} />
          </div>
        </div>
      </div>
    );
  }
}
