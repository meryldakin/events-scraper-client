import React from "react";
import { login } from "../api/index.js";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    login(this.state).then(data => console.log("login", data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="text" id="email" onChange={this.handleChange} />
          <label>Password:</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
