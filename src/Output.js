import React from "react";
import "./Output.css";

class Output extends React.Component {
  render() {
    return <div className="output">{this.props.currentVal}</div>;
  }
}

export default Output;
