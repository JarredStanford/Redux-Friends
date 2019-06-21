import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  loginHere = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/protected");
      }
    });
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Friends List</h1>
          <form onSubmit={this.loginHere}>
            <input
              placeholder="Username i.e Allison"
              onChange={this.handleChanges}
              name="username"
              value={this.state.credentials.username}
            />
            <input
              type="password"
              placeholder="Password i.e. Allison"
              onChange={this.handleChanges}
              name="password"
              value={this.state.credentials.password}
            />
            <button>{this.props.loggingIn ? "Logging in.." : "Log In"}</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);