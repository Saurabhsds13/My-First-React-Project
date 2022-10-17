import React, { Component } from "react";

export default class Left extends Component {
  myfun(ev) {
    console.log(Math.random());
    console.log(ev);
    console.log(ev.target.value);
    console.log(this.props.a);
    this.props.a(ev.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(ev) => {
            this.myfun(ev);
          }}
        ></input>
      </div>
    );
  }
}
