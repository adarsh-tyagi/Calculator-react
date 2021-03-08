import React from "react";
import "./Formula.css";

class Formula extends React.Component {
  render() {
    return <div className="formula">{this.props.formula}</div>;
  }
}

export default Formula;
