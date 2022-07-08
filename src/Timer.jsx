import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsInSession: this.props.session * 60,
      secondsInBreak: this.props.break * 60,
      start: true,
      startInterval: null,
      firstStart: true,
    };

    this.formatTimeLeft = this.formatTimeLeft.bind(this);
    this.startTimer = this.startSessionTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.session !== this.props.session) {
      this.setState({ secondsInSession: this.props.session * 60 });
    }
  }
  formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  startSessionTimer() {
    if (this.state.start) {
      this.setState({
        timerInterval: setInterval(() => {
          if (this.state.firstStart) {
            this.setState({
              secondsInSession: this.props.session * 60,
              firstStart: false,
            });
          }
          this.setState((prevState) => {
            return { secondsInSession: prevState.secondsInSession - 1 };
          });

          if (this.state.secondsInSession > 0) {
            document.getElementById("time-left").innerText =
              this.formatTimeLeft(this.state.secondsInSession);
          }
        }, 1000),
      });
      this.setState((prevState) => {
        return { start: false };
      });
    } else {
      console.log(this.state.timerInterval);
      clearInterval(this.state.timerInterval);
      this.setState((prevState) => {
        return { start: true };
      });
    }
  }

  render() {
    return (
      <div id="timer">
        <h3 id="timer-label">Session</h3>
        <div id="time-left">{this.props.session}:00</div>
        <button id="start_stop" onClick={this.startTimer}>
          Start/Stop
        </button>
        <button id="reset">Reset</button>
      </div>
    );
  }
}
// stop functionality (use componentdidupdate for updating sessionInSeconds whenever session length is incremented/decremented)
// reset (logic in app.jsx)
// transition from session timing to break with change in text
// styling
