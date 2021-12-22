import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes  from "prop-types"; // prop 检测工具


export default class Header extends Component {
  // constructor() {
  //   super();
  // }
  static propTypes = {
    siteName: PropTypes.string.isRequired
  }
  render() {
    console.log(this.props);
    return (
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    )
  }
}