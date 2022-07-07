import React, { Component } from "react";

export default class Session extends Component {
  render() {
    return (
      <div id="session">
        <h3 id="session-label">Session Length</h3>
        <button id="session-decrement" onClick={this.props.onDecrement}>
          Down
        </button>
        <button id="session-increment" onClick={this.props.onIncrement}>
          Up
        </button>
        <div id="session-length">{this.props.session}</div>
      </div>
    );
  }
}
