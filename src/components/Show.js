import React from "react";
import axios from "axios";

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      apivalue: [],
    };
  }

  myfun2() {
    console.log("clik working", Math.random());
  }

  componentWillUnmount() {
    // activated after you leave your currrent component
    document.body.removeEventListener("click", this.myfun2);
    this.setState({
      apivalue: [],
    });
  }

  componentDidMount() {
    document.body.addEventListener("click", this.myfun2);
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // console.log(res);
      // console.log(res.data);
      this.setState({
        apivalue: res.data,
      });
    });
  }

  render() {
    var api = this.state.apivalue;
    return (
      <div class="container">
        <div class="row">
          {api.length > 0 &&
            api.map((xyz) => (
              <div class="col-xl-3">
                <img src={xyz.image} class="img-fluid"></img>
                <h2>{xyz.price}</h2>
                <p>{xyz.title}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
