import React, { Component } from "react";

export default class Break extends Component {
  render() {
    return (
      <div id="break">
        <h3 id="break-label">Break Length</h3>
        <button id="break-decrement" onClick={this.props.onDecrement}>
          Down
        </button>
        <button id="break-increment" onClick={this.props.onIncrement}>
          Up
        </button>
        <div id="break-length">{this.props.break}</div>
      </div>
    );
  }
}
