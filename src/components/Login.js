import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "../actions/index";

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
    this.props.loginUser(this.state);
  };

  render() {
    if (localStorage.token) {
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
  return bindActionCreators(
    {
      loginUser: loginUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
