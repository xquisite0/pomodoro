import React, { Component } from "react";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      session: 25,
      break: 5,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  // increment logic
  increment(breakOrSession) {
    if (breakOrSession === "session") {
      if (this.state.session < 60) {
        this.setState((prevState) => {
          return { session: prevState.session + 1 };
        });
      }
    } else {
      if (this.state.break < 60) {
        this.setState((prevState) => {
          return { break: prevState.break + 1 };
        });
      }
    }
  }
  // decrement logic
  decrement(breakOrSession) {
    if (breakOrSession === "session") {
      if (this.state.session > 1) {
        this.setState((prevState) => {
          return { session: prevState.session - 1 };
        });
      }
    } else {
      this.setState((prevState) => {
        if (this.state.break > 1) {
          return { break: prevState.break - 1 };
        }
      });
    }
  }
  render() {
    return (
      <div id="app">
        <h1>Pomodoro Clock</h1>
        <Break
          onIncrement={() => this.increment("break")}
          onDecrement={() => this.decrement("break")}
          break={this.state.break}
        />
        <Session
          onIncrement={() => this.increment("session")}
          onDecrement={() => this.decrement("session")}
          session={this.state.session}
        />
        <Timer session={this.state.session} break={this.state.break} />
      </div>
    );
  }
}
