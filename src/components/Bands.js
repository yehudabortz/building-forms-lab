import React, { Component } from "react";
import Band from "./Band";

export default class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map((band, id) => (
          <Band key={id} band={band} />
        ))}
      </div>
    );
  }
}
