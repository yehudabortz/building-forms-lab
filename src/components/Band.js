import React, { Component } from "react";

export default class Band extends Component {
  render() {
    return (
      <div>
        <li>{this.props.band.name}</li>
      </div>
    );
  }
}
