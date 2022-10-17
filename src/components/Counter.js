import React from "react";
export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      rec: 0,
    };
  }
  myFun() {
    this.setState({
      rec: this.state.rec + 10,
    });
    // alert();
    // this.props.name = "Saurabhsds13";
  }
  render() {
    return (
      // use DIV or {<></>=Fragmentaion} when add more than one html element
      <>
        <button
          onClick={() => {
            this.myFun();
          }}
        >
          ADD
        </button>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
        <p>{this.state.rec}</p>
      </>
    );
  }
}
