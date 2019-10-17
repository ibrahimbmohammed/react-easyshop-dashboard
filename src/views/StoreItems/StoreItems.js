import React, { Component } from "react";

export default class StoreItems extends Component {
  componentDidMount() {
    this.props.handleToggle();
  }
  render() {
    return <div></div>;
  }
}
