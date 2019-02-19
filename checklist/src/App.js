import React, { Component } from 'react';
import './App.css';

import HomePage from "./components/HomePage"
import Authenticate from "./components/Authenticate"



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      username: ''
    }

  }

  componentDidMount = () => {
    this.logIn(false)
  }

  logIn = input => {
    if (input === true)
      this.setState({ loggedIn: true })
  }

  render() {

    return (
      <div className="App">
        {!this.state.loggedIn ?
          (
            <Authenticate login={this.logIn}></Authenticate>
          ) : (
            <HomePage></HomePage>
          )
        }

      </div>
    );
  }
}

export default App;


