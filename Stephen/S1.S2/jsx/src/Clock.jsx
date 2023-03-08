import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeoutID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeoutID);
  }

  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default Clock;
