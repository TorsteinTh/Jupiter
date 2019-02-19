import React, { Component } from "react";

class Authenticate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Torstein',
      password: '123',
      enteredUsername: '',
      enteredPassword: ''
    }
  }

  handlePasswordChange = e => {
    this.setState({
      enteredPassword: e.target.value
    })
  }


  handleUsernameChange = e => {
    this.setState({
      enteredUsername: e.target.value
    })

  }

  handleSubmit = () => {
    if (this.state.enteredPassword === this.state.password && this.state.enteredUsername === this.state.username) {
      this.props.login(true)
    }

  }

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <p>
            Username
          </p>
          <input placeholder="User name" value={this.state.enteredUsername} onChange={this.handleUsernameChange} autoFocus />
        </form>

        <form onSubmit={this.handleSubmit}>
          <p>
            Password
          </p>
          <input type="password" placeholder="Password" value={this.state.enteredPassword} onChange={this.handlePasswordChange} />
        </form>

      </div>
    );
  }
}

export default Authenticate;