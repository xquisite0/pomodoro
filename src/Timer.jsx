import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.formatTimeLeft = this.formatTimeLeft.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  startTimer() {
    let secondsInTime = this.props.session * 60;
    let timerInterval = setInterval(() => {
      secondsInTime -= 1;
      if (secondsInTime > 0) {
        document.getElementById("time-left").innerText =
          this.formatTimeLeft(secondsInTime);
      }
    }, 1000);
  }
  render() {
    return (
      <div id="timer">
        <h3 id="timer-label">Session</h3>
        <div id="time-left">25:00</div>
        <button id="start_stop" onClick={this.startTimer}>
          Start/Stop
        </button>
        <button id="reset">Reset</button>
      </div>
    );
  }
}
// stop functionality
// reset (logic in app.jsx)
// transition from session timing to break with change in text
// styling
