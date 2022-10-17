import React, { Component } from "react";

export default class Image extends Component {
  render() {
    if (this.props.a == "") {
      throw new Error("Error");
    }
    return (
      <div>
        <b>
          <img class="img-fluid" src={this.props.a} />
        </b>
      </div>
    );
  }
}
