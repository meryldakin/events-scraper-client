import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

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
    this.props.loginUser(this.state, this.props.history);
  };

  render() {
    if (localStorage.token && !this.props.current_user) {
      console.log("loading props", this.props)
      return <div> Login loading </div>
    }
    if (localStorage.token && this.props.current_user.username) {
      { console.log("in login, trying to push to events") }
      this.props.history.push("/events");
      return <div>l</div>;
    } else {
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
}

const mapStateToProps = state => {
  return {
    current_user: state.users.current_user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (userState) => dispatch(actions.loginUser(userState))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
