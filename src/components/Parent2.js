import React, { Component } from "react";
import Image from "./Image";
import ErrorBoundary from "./ErrorBoundary";
export default class Parent2 extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
            <Image a="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70" />
          </div>
          <div class="col-xl-4">
            <Image a="https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/k/o/-original-imaghx9qtwbnhwvy.jpeg?q=70" />
          </div>
          <div class="col-xl-4">
            <ErrorBoundary>
              <Image a="" />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }
}
