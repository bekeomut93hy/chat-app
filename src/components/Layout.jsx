import React, { Component } from "react";
import io from "socket.io-client";
const socketUrl = "http://172.25.190.193:6969";
export default class LayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null
    };
  }
  componentWillMount() {
    this.initSocket();
  }
  initSocket = () => {
    const socket = io(socketUrl);
    socket.on("connection", () => {
      console.log("Connected");
    });
    this.setState({ socket });
    socket.on("chat", msg => {
      console.log(msg);
    });
  };
  handleSend = e => {
    const msg = e.target.value;
    this.state.socket.emit("chat", msg);
  };
  render() {
    const { title } = this.props;
    console.log(this.state.socket);
    return (
      <div className="container">
        <input type="text" onChange={this.handleSend}></input>
      </div>
    );
  }
}
