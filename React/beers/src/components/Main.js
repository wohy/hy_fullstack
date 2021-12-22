import React, { Component } from "react";
import Header from "./Header";
import Item from "./Item";
import List from "./List";
import Loader from "./Loader";

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }
  render() {
    return (
      <div>
        <Header siteName="Beer me!"/>
        <Loader />
        <List />
        <Item />
      </div>
    )
  }
}